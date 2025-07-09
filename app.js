// -------------- MTR ARRIVAL BOARD - UPDATED 2025 -----------------
// Author: ChatGPT (debugged version)
// ---------------------------------------------------------------
//  This version fixes:
//   1. Endless loading caused by CORS failures
//   2. Line-colour background change @ 50% transparency
//   3. Better error / demo-data fallback
//   4. Cleaner timer / interval handling
// ---------------------------------------------------------------

// ==== 1. Constants ====

// List of CORS proxies (tried in order)
const PROXIES = [
    '', // direct first – if MTR reinstates CORS headers
    'https://api.allorigins.win/raw?url=',
    'https://everyorigin.vercel.app/raw?url=',
    'https://corsproxy.io/?'
];

const API_URL = 'https://rt.data.gov.hk/v1/transport/mtr/getSchedule.php';
const REFRESH_INTERVAL = 15000; // 15s (milder on free proxy limits)

// ==== 2. DOM cache ====
const lineSelect        = document.getElementById('line-select');
const stationSelect     = document.getElementById('station-select');
const refreshBtn        = document.getElementById('refresh-btn');
const boardContent      = document.getElementById('board-content');
const currentStationEl  = document.getElementById('current-station');
const currentLineEl     = document.getElementById('current-line');
const currentTimeEl     = document.getElementById('current-time');
const lastUpdateEl      = document.getElementById('last-update');
const arrivalBoard      = document.querySelector('.arrival-board');

// ==== 3. Data – lines, stations & colours (from Wikipedia template) ====
// Only trimmed sample to keep file short – include all if required
const MTR_DATA = {
    "TWL": { name: "Tsuen Wan Line", color: "#ff0000", stations: [
        { code: "CEN", name: "Central" },
        { code: "ADM", name: "Admiralty" },
        { code: "TST", name: "Tsim Sha Tsui" },
        { code: "JOR", name: "Jordan" },
        { code: "YMT", name: "Yau Ma Tei" },
        { code: "MOK", name: "Mong Kok" },
        { code: "PRE", name: "Prince Edward" },
        { code: "SSP", name: "Sham Shui Po" },
        { code: "CSW", name: "Cheung Sha Wan" },
        { code: "LCK", name: "Lai Chi Kok" },
        { code: "MEF", name: "Mei Foo" },
        { code: "LAK", name: "Lai King" },
        { code: "KWF", name: "Kwai Fong" },
        { code: "KWH", name: "Kwai Hing" },
        { code: "TWH", name: "Tai Wo Hau" },
        { code: "TSW", name: "Tsuen Wan" }
    ] },
    // ... other lines omitted for brevity – use full list in production
};

// ==== 4. State ====
let currentLine    = '';
let currentStation = '';
let refreshTimer   = null;

// ==== 5. Init ====
document.addEventListener('DOMContentLoaded', () => {
    populateLineSelect();
    attachEvents();
    updateClock();
    setInterval(updateClock, 1000);
});

// ==== 6. Populate dropdowns ====
function populateLineSelect() {
    lineSelect.innerHTML = '<option value="">Choose a line...</option>';
    Object.entries(MTR_DATA).forEach(([code, line]) => {
        const op = document.createElement('option');
        op.value = code;
        op.textContent = `${code} — ${line.name}`;
        lineSelect.appendChild(op);
    });
}

function populateStationSelect(lineCode) {
    stationSelect.innerHTML = '<option value="">Choose a station...</option>';
    if (!lineCode) { stationSelect.disabled = true; return; }
    MTR_DATA[lineCode].stations.forEach(s => {
        const op = document.createElement('option');
        op.value = s.code;
        op.textContent = `${s.code} — ${s.name}`;
        stationSelect.appendChild(op);
    });
    stationSelect.disabled = false;
}

// ==== 7. Event listeners ====
function attachEvents() {
    lineSelect.onchange = () => {
        populateStationSelect(lineSelect.value);
        resetView();
    };

    stationSelect.onchange = () => {
        if (stationSelect.value) {
            currentLine = lineSelect.value;
            currentStation = stationSelect.value;
            refreshBtn.disabled = false;
            updateHeader();
            colorizeBackground();
        } else {
            resetView();
        }
    };

    refreshBtn.onclick = fetchTrainData;
}

function resetView() {
    refreshBtn.disabled = true;
    clearInterval(refreshTimer);
    boardContent.innerHTML = `<div class="welcome-message"><h2>Welcome to MTR Arrival Board</h2><p>Select a line and station to view real-time train arrival information</p></div>`;
    currentStationEl.textContent = 'Select a station';
    currentLineEl.textContent    = '';
    lastUpdateEl.textContent     = '';
    document.body.style.background = 'linear-gradient(135deg,#1a1a2e 0%,#16213e 100%)';
    arrivalBoard.style.background = 'rgba(0,0,0,0.8)';
}

// ==== 8. Clock ====
function updateClock() {
    currentTimeEl.textContent = new Date().toLocaleTimeString('en-HK',{hour12:false});
}

// ==== 9. Colour background ====
function colorizeBackground() {
    const c = MTR_DATA[currentLine]?.color || '#1a1a2e';
    const rgba = hexToRgba(c,0.5);
    document.body.style.background = `linear-gradient(135deg, ${rgba} 0%, #16213e 100%)`;
    arrivalBoard.style.background = 'rgba(0,0,0,0.6)';
}
function hexToRgba(hex,alpha) {
    const [r,g,b] = hex.match(/[\da-f]{2}/gi).map(h=>parseInt(h,16));
    return `rgba(${r},${g},${b},${alpha})`;
}

// ==== 10. Fetch helpers ====
async function proxyFetch(url) {
    for (const p of PROXIES) {
        try {
            const target = p ? p + encodeURIComponent(url) : url;
            const res = await fetch(target,{cache:'no-store'});
            if (res.ok) return res.json();
        } catch (_) { /* try next proxy */ }
    }
    throw new Error('All proxy attempts failed');
}

// ==== 11. Main data fetch ====
async function fetchTrainData() {
    if (!currentLine || !currentStation) return;

    showMessage('loading','Updating train information...');

    try {
        const data = await proxyFetch(`${API_URL}?line=${currentLine}&sta=${currentStation}&lang=en`);
        if (data.status !== 1) throw new Error('API returned error');
        renderData(data);
    } catch (err) {
        console.warn('API error, using demo data.', err);
        renderData(makeDemoData());
        showDemoNotice();
    }

    lastUpdateEl.textContent = `Last updated: ${new Date().toLocaleTimeString('en-HK',{hour12:false})}`;
    if (refreshTimer) clearInterval(refreshTimer);
    refreshTimer = setInterval(fetchTrainData, REFRESH_INTERVAL);
}

// ==== 12. Render helpers ====
function renderData(raw) {
    const key    = `${currentLine}-${currentStation}`;
    const record = raw.data ? raw.data[key] : raw; // raw may be demoData
    if (!record || (!record.UP && !record.DOWN)) {
        showMessage('error','No train data available.');
        return;
    }

    let html='';
    if (record.UP   && record.UP.length)   html += makeSection('UP',   record.UP,   '↑');
    if (record.DOWN && record.DOWN.length) html += makeSection('DOWN', record.DOWN, '↓');
    boardContent.innerHTML = html;
}

function makeSection(title,trains,arrow) {
    return `<div class="direction-section">
        <div class="direction-header"><span class="direction-arrow">${arrow}</span>${title}</div>
        <div class="train-list">
            ${trains.map(t=>makeTrainItem(t)).join('')}
        </div>
    </div>`;
}

function makeTrainItem(t) {
    const mins  = t.ttnt==='0' ? 'Departing' : `${t.ttnt} min`;
    const time  = new Date(t.time).toLocaleTimeString('en-HK',{hour12:false,hour:'2-digit',minute:'2-digit'});
    const dest  = getStationName(t.dest);
    return `<div class="train-item">
        <div class="train-info">
            <div class="train-sequence">${t.seq}</div>
            <div>
                <div class="train-destination">${dest}</div>
                <div class="train-platform">Platform ${t.plat}</div>
            </div>
        </div>
        <div class="train-time">
            <div class="train-minutes">${mins}</div>
            <div class="train-exact-time">${time}</div>
        </div>
    </div>`;
}

function getStationName(code){
    for (const line of Object.values(MTR_DATA)){
        const s = line.stations.find(st=>st.code===code);
        if (s) return s.name;
    }
    return code;
}

// ==== 13. Utils ====
function showMessage(type,msg){
    boardContent.innerHTML = `<div class="status-message ${type}"><p>${msg}</p></div>`;
}

function showDemoNotice(){
    if (document.querySelector('.demo-notice')) return;
    const div = document.createElement('div');
    div.className = 'demo-notice';
    div.textContent = 'Demo data displayed (live API unavailable)';
    document.body.appendChild(div);
    setTimeout(()=>div.remove(),4000);
}

function makeDemoData(){
    const future = m=>{
        const dt = new Date();
        dt.setMinutes(dt.getMinutes()+m);
        return dt.toISOString().slice(0,19).replace('T',' ');
    };
    return {
        UP:[{ttnt:'1',dest:currentStation,seq:'1',plat:'1',time:future(1)},{ttnt:'4',dest:currentStation,seq:'2',plat:'1',time:future(4)}],
        DOWN:[{ttnt:'2',dest:currentStation,seq:'1',plat:'2',time:future(2)},{ttnt:'6',dest:currentStation,seq:'2',plat:'2',time:future(6)}]
    };
}

// =================== END ===================