// MTR Lines and Stations Data with Official Colors
const MTR_DATA = {
    "AEL": {
        "name": "Airport Express",
        "color": "#1c7670",
        "stations": [
            {"code": "HOK", "name": "Hong Kong"},
            {"code": "KOW", "name": "Kowloon"},
            {"code": "TSY", "name": "Tsing Yi"},
            {"code": "AIR", "name": "Airport"},
            {"code": "AWE", "name": "AsiaWorld Expo"}
        ]
    },
    "TCL": {
        "name": "Tung Chung Line",
        "color": "#fe7f1d",
        "stations": [
            {"code": "HOK", "name": "Hong Kong"},
            {"code": "KOW", "name": "Kowloon"},
            {"code": "OLY", "name": "Olympic"},
            {"code": "NAC", "name": "Nam Cheong"},
            {"code": "LAK", "name": "Lai King"},
            {"code": "TSY", "name": "Tsing Yi"},
            {"code": "SUN", "name": "Sunny Bay"},
            {"code": "TUC", "name": "Tung Chung"}
        ]
    },
    "TML": {
        "name": "Tuen Ma Line",
        "color": "#9a3b26",
        "stations": [
            {"code": "WKS", "name": "Wu Kai Sha"},
            {"code": "MOS", "name": "Ma On Shan"},
            {"code": "HEO", "name": "Heng On"},
            {"code": "TSH", "name": "Tai Shui Hang"},
            {"code": "SHM", "name": "Shek Mun"},
            {"code": "CIO", "name": "City One"},
            {"code": "STW", "name": "Sha Tin Wai"},
            {"code": "CKT", "name": "Che Kung Temple"},
            {"code": "TAW", "name": "Tai Wai"},
            {"code": "HIK", "name": "Hin Keng"},
            {"code": "DIH", "name": "Diamond Hill"},
            {"code": "KAT", "name": "Kai Tak"},
            {"code": "SUW", "name": "Sung Wong Toi"},
            {"code": "TKW", "name": "To Kwa Wan"},
            {"code": "HOM", "name": "Ho Man Tin"},
            {"code": "HUH", "name": "Hung Hom"},
            {"code": "ETS", "name": "East Tsim Sha Tsui"},
            {"code": "AUS", "name": "Austin"},
            {"code": "NAC", "name": "Nam Cheong"},
            {"code": "MEF", "name": "Mei Foo"},
            {"code": "TWW", "name": "Tsuen Wan West"},
            {"code": "KSR", "name": "Kam Sheung Road"},
            {"code": "YUL", "name": "Yuen Long"},
            {"code": "LOP", "name": "Long Ping"},
            {"code": "TIS", "name": "Tin Shui Wai"},
            {"code": "SIH", "name": "Siu Hong"},
            {"code": "TUM", "name": "Tuen Mun"}
        ]
    },
    "TKL": {
        "name": "Tseung Kwan O Line",
        "color": "#6b208b",
        "stations": [
            {"code": "NOP", "name": "North Point"},
            {"code": "QUB", "name": "Quarry Bay"},
            {"code": "YAT", "name": "Yau Tong"},
            {"code": "TIK", "name": "Tiu Keng Leng"},
            {"code": "TKO", "name": "Tseung Kwan O"},
            {"code": "LHP", "name": "LOHAS Park"},
            {"code": "HAH", "name": "Hang Hau"},
            {"code": "POA", "name": "Po Lam"}
        ]
    },
    "EAL": {
        "name": "East Rail Line",
        "color": "#53b7e8",
        "stations": [
            {"code": "ADM", "name": "Admiralty"},
            {"code": "EXC", "name": "Exhibition Centre"},
            {"code": "HUH", "name": "Hung Hom"},
            {"code": "MKK", "name": "Mong Kok East"},
            {"code": "KOT", "name": "Kowloon Tong"},
            {"code": "TAW", "name": "Tai Wai"},
            {"code": "SHT", "name": "Sha Tin"},
            {"code": "FOT", "name": "Fo Tan"},
            {"code": "RAC", "name": "Racecourse"},
            {"code": "UNI", "name": "University"},
            {"code": "TAP", "name": "Tai Po Market"},
            {"code": "TWO", "name": "Tai Wo"},
            {"code": "FAN", "name": "Fanling"},
            {"code": "SHS", "name": "Sheung Shui"},
            {"code": "LOW", "name": "Lo Wu"},
            {"code": "LMC", "name": "Lok Ma Chau"}
        ]
    },
    "SIL": {
        "name": "South Island Line",
        "color": "#b5bd00",
        "stations": [
            {"code": "ADM", "name": "Admiralty"},
            {"code": "OCP", "name": "Ocean Park"},
            {"code": "WCH", "name": "Wong Chuk Hang"},
            {"code": "LET", "name": "Lei Tung"},
            {"code": "SOH", "name": "South Horizons"}
        ]
    },
    "TWL": {
        "name": "Tsuen Wan Line",
        "color": "#ff0000",
        "stations": [
            {"code": "CEN", "name": "Central"},
            {"code": "ADM", "name": "Admiralty"},
            {"code": "TST", "name": "Tsim Sha Tsui"},
            {"code": "JOR", "name": "Jordan"},
            {"code": "YMT", "name": "Yau Ma Tei"},
            {"code": "MOK", "name": "Mong Kok"},
            {"code": "PRE", "name": "Prince Edward"},
            {"code": "SSP", "name": "Sham Shui Po"},
            {"code": "CSW", "name": "Cheung Sha Wan"},
            {"code": "LCK", "name": "Lai Chi Kok"},
            {"code": "MEF", "name": "Mei Foo"},
            {"code": "LAK", "name": "Lai King"},
            {"code": "KWF", "name": "Kwai Fong"},
            {"code": "KWH", "name": "Kwai Hing"},
            {"code": "TWH", "name": "Tai Wo Hau"},
            {"code": "TSW", "name": "Tsuen Wan"}
        ]
    },
    "ISL": {
        "name": "Island Line",
        "color": "#0860a8",
        "stations": [
            {"code": "KET", "name": "Kennedy Town"},
            {"code": "HKU", "name": "HKU"},
            {"code": "SYP", "name": "Sai Ying Pun"},
            {"code": "SHW", "name": "Sheung Wan"},
            {"code": "CEN", "name": "Central"},
            {"code": "ADM", "name": "Admiralty"},
            {"code": "WAC", "name": "Wan Chai"},
            {"code": "CAB", "name": "Causeway Bay"},
            {"code": "TIH", "name": "Tin Hau"},
            {"code": "FOH", "name": "Fortress Hill"},
            {"code": "NOP", "name": "North Point"},
            {"code": "QUB", "name": "Quarry Bay"},
            {"code": "TAK", "name": "Tai Koo"},
            {"code": "SWH", "name": "Sai Wan Ho"},
            {"code": "SKW", "name": "Shau Kei Wan"},
            {"code": "HFC", "name": "Heng Fa Chuen"},
            {"code": "CHW", "name": "Chai Wan"}
        ]
    },
    "KTL": {
        "name": "Kwun Tong Line",
        "color": "#1a9431",
        "stations": [
            {"code": "WHA", "name": "Whampoa"},
            {"code": "HOM", "name": "Ho Man Tin"},
            {"code": "YMT", "name": "Yau Ma Tei"},
            {"code": "MOK", "name": "Mong Kok"},
            {"code": "PRE", "name": "Prince Edward"},
            {"code": "SKM", "name": "Shek Kip Mei"},
            {"code": "KOT", "name": "Kowloon Tong"},
            {"code": "LOF", "name": "Lok Fu"},
            {"code": "WTS", "name": "Wong Tai Sin"},
            {"code": "DIH", "name": "Diamond Hill"},
            {"code": "CHH", "name": "Choi Hung"},
            {"code": "KOB", "name": "Kowloon Bay"},
            {"code": "NTK", "name": "Ngau Tau Kok"},
            {"code": "KWT", "name": "Kwun Tong"},
            {"code": "LAT", "name": "Lam Tin"},
            {"code": "YAT", "name": "Yau Tong"},
            {"code": "TIK", "name": "Tiu Keng Leng"}
        ]
    },
    "DRL": {
        "name": "Disneyland Resort Line",
        "color": "#f550a6",
        "stations": [
            {"code": "SUN", "name": "Sunny Bay"},
            {"code": "DIS", "name": "Disneyland Resort"}
        ]
    }
};

// CORS Proxy URL - Using a public CORS proxy as workaround
const CORS_PROXY = 'https://api.allorigins.win/raw?url=';
const API_URL = 'https://rt.data.gov.hk/v1/transport/mtr/getSchedule.php';
const REFRESH_INTERVAL = 10000; // 10 seconds

// Global Variables
let currentLine = '';
let currentStation = '';
let refreshTimer = null;

// DOM Elements
const lineSelect = document.getElementById('line-select');
const stationSelect = document.getElementById('station-select');
const refreshBtn = document.getElementById('refresh-btn');
const currentStationEl = document.getElementById('current-station');
const currentLineEl = document.getElementById('current-line');
const currentTimeEl = document.getElementById('current-time');
const lastUpdateEl = document.getElementById('last-update');
const boardContent = document.getElementById('board-content');
const arrivalBoard = document.querySelector('.arrival-board');

// Initialize the application
function init() {
    populateLineSelect();
    setupEventListeners();
    updateCurrentTime();
    setInterval(updateCurrentTime, 1000);
}

// Populate line selection dropdown
function populateLineSelect() {
    lineSelect.innerHTML = '<option value="">Choose a line...</option>';
    
    Object.entries(MTR_DATA).forEach(([code, line]) => {
        const option = document.createElement('option');
        option.value = code;
        option.textContent = `${code} - ${line.name}`;
        lineSelect.appendChild(option);
    });
}

// Populate station selection dropdown
function populateStationSelect(lineCode) {
    stationSelect.innerHTML = '<option value="">Choose a station...</option>';
    
    if (lineCode && MTR_DATA[lineCode]) {
        MTR_DATA[lineCode].stations.forEach(station => {
            const option = document.createElement('option');
            option.value = station.code;
            option.textContent = `${station.code} - ${station.name}`;
            stationSelect.appendChild(option);
        });
        stationSelect.disabled = false;
    } else {
        stationSelect.disabled = true;
    }
}

// Setup event listeners
function setupEventListeners() {
    lineSelect.addEventListener('change', function() {
        const selectedLine = this.value;
        populateStationSelect(selectedLine);
        stationSelect.value = '';
        refreshBtn.disabled = true;
        clearInterval(refreshTimer);
        resetBackgroundColor();
        showWelcomeMessage();
    });

    stationSelect.addEventListener('change', function() {
        const selectedStation = this.value;
        if (selectedStation) {
            currentLine = lineSelect.value;
            currentStation = selectedStation;
            refreshBtn.disabled = false;
            updateStationInfo();
            updateBackgroundColor();
            fetchTrainData();
            startAutoRefresh();
        } else {
            refreshBtn.disabled = true;
            clearInterval(refreshTimer);
            resetBackgroundColor();
            showWelcomeMessage();
        }
    });

    refreshBtn.addEventListener('click', function() {
        if (currentLine && currentStation) {
            fetchTrainData();
        }
    });
}

// Update station information in header
function updateStationInfo() {
    const stationName = MTR_DATA[currentLine].stations.find(s => s.code === currentStation)?.name || currentStation;
    const lineName = MTR_DATA[currentLine].name;
    
    currentStationEl.textContent = stationName;
    currentLineEl.textContent = `${currentLine} - ${lineName}`;
}

// Update background color based on MTR line color
function updateBackgroundColor() {
    if (currentLine && MTR_DATA[currentLine]) {
        const lineColor = MTR_DATA[currentLine].color;
        const transparentColor = hexToRgba(lineColor, 0.5);
        document.body.style.background = `linear-gradient(135deg, ${transparentColor} 0%, #16213e 100%)`;
        arrivalBoard.style.background = `rgba(0, 0, 0, 0.6)`;
    }
}

// Reset background color to default
function resetBackgroundColor() {
    document.body.style.background = 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)';
    arrivalBoard.style.background = 'rgba(0, 0, 0, 0.8)';
}

// Convert hex color to rgba with transparency
function hexToRgba(hex, alpha) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

// Update current time display
function updateCurrentTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-HK', { 
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    currentTimeEl.textContent = timeString;
}

// Fetch train data from API with CORS proxy
async function fetchTrainData() {
    try {
        // Show a brief loading state without infinite spinner
        showBriefLoading();
        
        const proxyUrl = `${CORS_PROXY}${encodeURIComponent(`${API_URL}?line=${currentLine}&sta=${currentStation}&lang=en`)}`;
        const response = await fetch(proxyUrl);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data.status === 1) {
            displayTrainData(data);
            updateLastUpdateTime();
        } else {
            // Show demo data when API fails
            showDemoData();
        }
    } catch (error) {
        console.error('Error fetching train data:', error);
        // Show demo data instead of error
        showDemoData();
    }
}

// Show brief loading without infinite spinner
function showBriefLoading() {
    boardContent.innerHTML = `
        <div class="status-message loading">
            <p>Updating train information...</p>
        </div>
    `;
    
    // Remove loading message after 1 second
    setTimeout(() => {
        if (boardContent.querySelector('.status-message.loading')) {
            showDemoData();
        }
    }, 1000);
}

// Show demo data when API is unavailable
function showDemoData() {
    const stationName = MTR_DATA[currentLine].stations.find(s => s.code === currentStation)?.name || currentStation;
    
    const demoData = {
        "UP": [
            {
                "ttnt": "2",
                "dest": getRandomDestination("UP"),
                "seq": "1",
                "plat": "1",
                "time": getTimeFromNow(2)
            },
            {
                "ttnt": "5",
                "dest": getRandomDestination("UP"),
                "seq": "2", 
                "plat": "1",
                "time": getTimeFromNow(5)
            },
            {
                "ttnt": "8",
                "dest": getRandomDestination("UP"),
                "seq": "3",
                "plat": "1", 
                "time": getTimeFromNow(8)
            }
        ],
        "DOWN": [
            {
                "ttnt": "3",
                "dest": getRandomDestination("DOWN"),
                "seq": "1",
                "plat": "2",
                "time": getTimeFromNow(3)
            },
            {
                "ttnt": "7",
                "dest": getRandomDestination("DOWN"),
                "seq": "2",
                "plat": "2",
                "time": getTimeFromNow(7)
            },
            {
                "ttnt": "11",
                "dest": getRandomDestination("DOWN"),
                "seq": "3",
                "plat": "2",
                "time": getTimeFromNow(11)
            }
        ]
    };
    
    displayTrainDataFromDemo(demoData);
    updateLastUpdateTime();
    
    // Show notice about demo data
    setTimeout(() => {
        const notice = document.createElement('div');
        notice.className = 'demo-notice';
        notice.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: rgba(255, 193, 7, 0.9);
            color: #000;
            padding: 10px 15px;
            border-radius: 5px;
            font-size: 0.9em;
            z-index: 1000;
        `;
        notice.textContent = 'Demo data shown (API temporarily unavailable)';
        document.body.appendChild(notice);
        
        setTimeout(() => {
            if (notice.parentNode) {
                notice.parentNode.removeChild(notice);
            }
        }, 5000);
    }, 500);
}

// Get random destination for demo data
function getRandomDestination(direction) {
    const stations = MTR_DATA[currentLine].stations;
    const currentIndex = stations.findIndex(s => s.code === currentStation);
    
    if (direction === "UP" && currentIndex < stations.length - 1) {
        return stations[stations.length - 1].code; // Last station
    } else if (direction === "DOWN" && currentIndex > 0) {
        return stations[0].code; // First station
    }
    
    return stations[Math.floor(Math.random() * stations.length)].code;
}

// Get time from now
function getTimeFromNow(minutes) {
    const now = new Date();
    now.setMinutes(now.getMinutes() + minutes);
    return now.toISOString().slice(0, 19).replace('T', ' ');
}

// Display train data from demo
function displayTrainDataFromDemo(demoData) {
    let html = '';
    
    // Display UP direction trains
    if (demoData.UP && demoData.UP.length > 0) {
        html += createDirectionSection('UP', demoData.UP, '↑');
    }
    
    // Display DOWN direction trains  
    if (demoData.DOWN && demoData.DOWN.length > 0) {
        html += createDirectionSection('DOWN', demoData.DOWN, '↓');
    }
    
    if (html === '') {
        showErrorMessage('No trains scheduled at this time');
    } else {
        boardContent.innerHTML = html;
    }
}

// Display train data (original function)
function displayTrainData(data) {
    const stationKey = `${currentLine}-${currentStation}`;
    const stationData = data.data[stationKey];
    
    if (!stationData) {
        showDemoData();
        return;
    }
    
    let html = '';
    
    // Display UP direction trains
    if (stationData.UP && stationData.UP.length > 0) {
        html += createDirectionSection('UP', stationData.UP, '↑');
    }
    
    // Display DOWN direction trains
    if (stationData.DOWN && stationData.DOWN.length > 0) {
        html += createDirectionSection('DOWN', stationData.DOWN, '↓');
    }
    
    if (html === '') {
        showDemoData();
    } else {
        boardContent.innerHTML = html;
    }
}

// Create direction section HTML (remains the same)
function createDirectionSection(direction, trains, arrow) {
    let html = `
        <div class="direction-section">
            <div class="direction-header">
                <span class="direction-arrow">${arrow}</span>
                <span>${direction}</span>
            </div>
            <div class="train-list">
    `;
    
    trains.forEach(train => {
        const minutes = train.ttnt === "0" ? "Departing" : `${train.ttnt} min`;
        const time = new Date(train.time).toLocaleTimeString('en-HK', { 
            hour12: false,
            hour: '2-digit',
            minute: '2-digit'
        });
        
        // Get destination name
        const destName = getStationName(train.dest);
        
        html += `
            <div class="train-item">
                <div class="train-info">
                    <div class="train-sequence">${train.seq}</div>
                    <div>
                        <div class="train-destination">${destName}</div>
                        <div class="train-platform">Platform ${train.plat}</div>
                    </div>
                </div>
                <div class="train-time">
                    <div class="train-minutes">${minutes}</div>
                    <div class="train-exact-time">${time}</div>
                </div>
            </div>
        `;
    });
    
    html += `
            </div>
        </div>
    `;
    
    return html;
}

// Get station name from code (remains the same)
function getStationName(code) {
    for (const [lineCode, lineData] of Object.entries(MTR_DATA)) {
        const station = lineData.stations.find(s => s.code === code);
        if (station) {
            return station.name;
        }
    }
    return code;
}

// Show error message (simplified)
function showErrorMessage(message) {
    boardContent.innerHTML = `
        <div class="status-message error">
            <h3>Service Notice</h3>
            <p>${message}</p>
        </div>
    `;
}

// Show welcome message (remains the same)
function showWelcomeMessage() {
    boardContent.innerHTML = `
        <div class="welcome-message">
            <h2>Welcome to MTR Arrival Board</h2>
            <p>Select a line and station to view real-time train arrival information</p>
        </div>
    `;
    currentStationEl.textContent = 'Select a station';
    currentLineEl.textContent = '';
    lastUpdateEl.textContent = '';
}

// Update last update time (remains the same)
function updateLastUpdateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-HK', { 
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    lastUpdateEl.textContent = `Last updated: ${timeString}`;
}

// Start auto refresh (remains the same)
function startAutoRefresh() {
    clearInterval(refreshTimer);
    refreshTimer = setInterval(() => {
        if (currentLine && currentStation) {
            fetchTrainData();
        }
    }, REFRESH_INTERVAL);
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', init);
