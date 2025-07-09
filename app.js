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
const lineSelect = document.getElementById('line-select');
const stationSelect = document.getElementById('station-select');
const refreshBtn = document.getElementById('refresh-btn');
const boardContent = document.getElementById('board-content');
const currentStationEl = document.getElementById('current-station');
const currentLineEl = document.getElementById('current-line');
const currentTimeEl = document.getElementById('current-time');
const lastUpdateEl = document.getElementById('last-update');
const arrivalBoard = document.querySelector('.arrival-board');

// ==== 3. Data – lines, stations & colours (from Wikipedia template) ====
const MTR_DATA = {
  "TWL": {
    name: "Tsuen Wan Line", color: "#ff0000", stations: [
      { code: "CEN", name: "Central" }, { code: "ADM", name: "Admiralty" }, { code: "TST", name: "Tsim Sha Tsui" },
      { code: "JOR", name: "Jordan" }, { code: "YMT", name: "Yau Ma Tei" }, { code: "MOK", name: "Mong Kok" },
      { code: "PRE", name: "Prince Edward" }, { code: "SSP", name: "Sham Shui Po" }, { code: "CSW", name: "Cheung Sha Wan" },
      { code: "LCK", name: "Lai Chi Kok" }, { code: "MEF", name: "Mei Foo" }, { code: "LAK", name: "Lai King" },
      { code: "KWF", name: "Kwai Fong" }, { code: "KWH", name: "Kwai Hing" }, { code: "TWH", name: "Tai Wo Hau" }, { code: "TSW", name: "Tsuen Wan" }
    ]
  },
  "KTL": {
    name: "Kwun Tong Line", color: "#1a9431", stations: [
      { code: "WHA", name: "Whampoa" }, { code: "HOM", name: "Ho Man Tin" }, { code: "YMT", name: "Yau Ma Tei" },
      { code: "MOK", name: "Mong Kok" }, { code: "PRE", name: "Prince Edward" }, { code: "SKM", name: "Shek Kip Mei" },
      { code: "KOT", name: "Kowloon Tong" }, { code: "LOF", name: "Lok Fu" }, { code: "WTS", name: "Wong Tai Sin" },
      { code: "DIH", name: "Diamond Hill" }, { code: "CHH", name: "Choi Hung" }, { code: "KOB", name: "Kowloon Bay" },
      { code: "NTK", name: "Ngau Tau Kok" }, { code: "KWT", name: "Kwun Tong" }, { code: "LAT", name: "Lam Tin" },
      { code: "YAT", name: "Yau Tong" }, { code: "TIK", name: "Tiu Keng Leng" }
    ]
  },
  "ISL": {
    name: "Island Line", color: "#0860a8", stations: [
      { code: "KET", name: "Kennedy Town" }, { code: "HKU", name: "HKU" }, { code: "SYP", name: "Sai Ying Pun" },
      { code: "SHW", name: "Sheung Wan" }, { code: "CEN", name: "Central" }, { code: "ADM", name: "Admiralty" },
      { code: "WAC", name: "Wan Chai" }, { code: "CAB", name: "Causeway Bay" }, { code: "TIH", name: "Tin Hau" },
      { code: "FOH", name: "Fortress Hill" }, { code: "NOP", name: "North Point" }, { code: "QUB", name: "Quarry Bay" },
      { code: "TAK", name: "Tai Koo" }, { code: "SWH", name: "Sai Wan Ho" }, { code: "SKW", name: "Shau Kei Wan" },
      { code: "HFC", name: "Heng Fa Chuen" }, { code: "CHW", name: "Chai Wan" }
    ]
  },
  "TKL": {
    name: "Tseung Kwan O Line", color: "#6b208b", stations: [
      { code: "NOP", name: "North Point" }, { code: "QUB", name: "Quarry Bay" }, { code: "YAT", name: "Yau Tong" },
      { code: "TIK", name: "Tiu Keng Leng" }, { code: "TKO", name: "Tseung Kwan O" }, { code: "LHP", name: "LOHAS Park" },
      { code: "HAH", name: "Hang Hau" }, { code: "POA", name: "Po Lam" }
    ]
  },
  "TCL": {
    name: "Tung Chung Line", color: "#fe7f1d", stations: [
      { code: "HOK", name: "Hong Kong" }, { code: "KOW", name: "Kowloon" }, { code: "OLY", name: "Olympic" },
      { code: "NAC", name: "Nam Cheong" }, { code: "LAK", name: "Lai King" }, { code: "TSY", name: "Tsing Yi" },
      { code: "SUN", name: "Sunny Bay" }, { code: "TUC", name: "Tung Chung" }
    ]
  },
  "AEL": {
    name: "Airport Express", color: "#1c7670", stations: [
      { code: "HOK", name: "Hong Kong" }, { code: "KOW", name: "Kowloon" }, { code: "TSY", name: "Tsing Yi" },
      { code: "AIR", name: "Airport" }, { code: "AWE", name: "AsiaWorld Expo" }
    ]
  },
  "EAL": {
    name: "East Rail Line", color: "#53b7e8", stations: [
      { code: "ADM", name: "Admiralty" }, { code: "EXC", name: "Exhibition Centre" }, { code: "HUH", name: "Hung Hom" },
      { code: "MKK", name: "Mong Kok East" }, { code: "KOT", name: "Kowloon Tong" }, { code: "TAW", name: "Tai Wai" },
      { code: "SHT", name: "Sha Tin" }, { code: "FOT", name: "Fo Tan" }, { code: "RAC", name: "Racecourse" },
      { code: "UNI", name: "University" }, { code: "TAP", name: "Tai Po Market" }, { code: "TWO", name: "Tai Wo" },
      { code: "FAN", name: "Fanling" }, { code: "SHS", name: "Sheung Shui" }, { code: "LOW", name: "Lo Wu" }, { code: "LMC", name: "Lok Ma Chau" }
    ]
  },
  "TML": {
    name: "Tuen Ma Line", color: "#9a3b26", stations: [
      { code: "WKS", name: "Wu Kai Sha" }, { code: "MOS", name: "Ma On Shan" }, { code: "HEO", name: "Heng On" },
      { code: "TSH", name: "Tai Shui Hang" }, { code: "SHM", name: "Shek Mun" }, { code: "CIO", name: "City One" },
      { code: "STW", name: "Sha Tin Wai" }, { code: "CKT", name: "Che Kung Temple" }, { code: "TAW", name: "Tai Wai" },
      { code: "HIK", name: "Hin Keng" }, { code: "DIH", name: "Diamond Hill" }, { code: "KAT", name: "Kai Tak" },
      { code: "SUW", name: "Sung Wong Toi" }, { code: "TKW", name: "To Kwa Wan" }, { code: "HOM", name: "Ho Man Tin" },
      { code: "HUH", name: "Hung Hom" }, { code: "ETS", name: "East Tsim Sha Tsui" }, { code: "AUS", name: "Austin" },
      { code: "NAC", name: "Nam Cheong" }, { code: "MEF", name: "Mei Foo" }, { code: "TWW", name: "Tsuen Wan West" },
      { code: "KSR", name: "Kam Sheung Road" }, { code: "YUL", name: "Yuen Long" }, { code: "LOP", name: "Long Ping" },
      { code: "TIS", name: "Tin Shui Wai" }, { code: "SIH", name: "Siu Hong" }, { code: "TUM", name: "Tuen Mun" }
    ]
  },
  "SIL": {
    name: "South Island Line", color: "#b5bd00", stations: [
      { code: "ADM", name: "Admiralty" }, { code: "OCP", name: "Ocean Park" }, { code: "WCH", name: "Wong Chuk Hang" },
      { code: "LET", name: "Lei Tung" }, { code: "SOH", name: "South Horizons" }
    ]
  },
  "DRL": {
    name: "Disneyland Resort Line", color: "#f550a6", stations: [
      { code: "SUN", name: "Sunny Bay" }, { code: "DIS", name: "Disneyland Resort" }
    ]
  }
};

// ==== 4. State ====
let currentLine = '';
let currentStation = '';
let refreshTimer = null;

// ==== 5. Init ====
document.addEventListener('DOMContentLoaded', () => {
  populateLineSelect();
  attachEvents();
  updateClock();
  setInterval(updateClock, 1000);
});

// ==== 6. Populate dropdowns ====
function populateLineSelect() {
  lineSelect.innerHTML = '<option value="">Choose a line…</option>';
  Object.entries(MTR_DATA).forEach(([code, line]) => {
    const op = document.createElement('option');
    op.value = code;
    op.textContent = `${code} — ${line.name}`;
    lineSelect.appendChild(op);
  });
}
function populateStationSelect(lineCode) {
  stationSelect.innerHTML = '<option value="">Choose a station…</option>';
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
  lineSelect.onchange = () => { populateStationSelect(lineSelect.value); resetView(); };
  stationSelect.onchange = () => {
    if (stationSelect.value) {
      currentLine = lineSelect.value; currentStation = stationSelect.value;
      refreshBtn.disabled = false;
      updateHeader(); colorizeBackground();
    } else { resetView(); }
  };
  refreshBtn.onclick = fetchTrainData;
}
function resetView() {
  refreshBtn.disabled = true; clearInterval(refreshTimer);
  boardContent.innerHTML = `<div class="welcome-message"><h2>Welcome to MTR Arrival Board</h2><p>Select a line and station to view real-time arrivals</p></div>`;
  currentStationEl.textContent = 'Select a station'; currentLineEl.textContent = '';
  lastUpdateEl.textContent = '';
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
    renderData(makeDemoData());
    showDemoNotice();
  }
  lastUpdateEl.textContent = `Last updated: ${new Date().toLocaleTimeString('en-HK',{hour12:false})}`;
  if (refreshTimer) clearInterval(refreshTimer);
  refreshTimer = setInterval(fetchTrainData, REFRESH_INTERVAL);
}

// ==== 12. Render helpers ====
function renderData(raw) {
  const key = `${currentLine}-${currentStation}`;
  const record = raw.data ? raw.data[key] : raw; // raw may be demoData
  if (!record || (!record.UP && !record.DOWN)) {
    showMessage('error','No train data available.');
    return;
  }
  let html='';
  if (record.UP && record.UP.length) html += makeSection('UP', record.UP, '↑');
  if (record.DOWN && record.DOWN.length) html += makeSection('DOWN', record.DOWN, '↓');
  boardContent.innerHTML = html;
}
function makeSection(title,trains,arrow) {
  return `<div class="direction-section">
    <div class="direction-header"><span>${arrow}</span>${title}</div>
    <div class="train-list">${trains.map(makeItem).join('')}</div>
  </div>`;
}
function makeItem(t) {
  const mins = t.ttnt==='0'?'Departing':`${t.ttnt} min`;
  const hhmmss = new Date(t.time).toLocaleTimeString('en-HK',{hour12:false});
  return `<div class="train-item">
    <div class="train-info">
      <span class="train-sequence">${t.seq}</span>
      <div>
        <div class="train-destination">${findName(t.dest)}</div>
        <div class="train-platform">Platform ${t.plat}</div>
      </div>
    </div>
    <div class="train-time">
      <div class="train-minutes">${mins}</div>
      <div class="train-exact-time">${hhmmss}</div>
    </div>
  </div>`;
}
function findName(code) {
  for(const l of Object.values(MTR_DATA)){const s=l.stations.find(x=>x.code===code);if(s)return s.name;}
  return code;
}

// ==== 13. fallback/demo ====
function showMessage(cls,msg){boardContent.innerHTML=`<div class="status-message ${cls}">${msg}</div>`;}
function showDemoNotice(){
  if(document.querySelector('.demo-notice'))return;
  const n=document.createElement('div');
  n.className='demo-notice'; n.textContent='Demo data displayed (live API unavailable)';
  document.body.appendChild(n); setTimeout(()=>n.remove(),4000);
}
function makeDemoData(){
  const plus= m=>{const d=new Date();d.setMinutes(d.getMinutes()+m);return d.toISOString().slice(0,19).replace('T',' ');}
  return {UP:[
    {ttnt:'1',dest:currentStation,seq:'1',plat:'1',time:plus(1)},
    {ttnt:'4',dest:currentStation,seq:'2',plat:'1',time:plus(4)}],
    DOWN:[
    {ttnt:'2',dest:currentStation,seq:'1',plat:'2',time:plus(2)},
    {ttnt:'6',dest:currentStation,seq:'2',plat:'2',time:plus(6)}]};
}
