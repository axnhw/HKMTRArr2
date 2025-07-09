// MTR Lines and Stations Data
const MTR_DATA = {
  "AEL": {
    "name": "Airport Express",
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
    "stations": [
      {"code": "SUN", "name": "Sunny Bay"},
      {"code": "DIS", "name": "Disneyland Resort"}
    ]
  }
};

// Configuration
const CONFIG = {
  apiEndpoint: "https://rt.data.gov.hk/v1/transport/mtr/getSchedule.php",
  updateFrequency: 10000, // 10 seconds
  language: "en"
};

// Global variables
let currentLine = '';
let currentStation = '';
let refreshInterval = null;
let lastUpdateTime = null;

// Application state
const appState = {
  initialized: false,
  isRefreshing: false,
  hasError: false
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded, initializing app...');
  initializeApp();
});

function initializeApp() {
  try {
    console.log('Initializing MTR Arrival Board...');
    
    // Check if all required elements exist
    const requiredElements = [
      'line-select', 'station-select', 'refresh-btn', 'refresh-text',
      'current-station', 'current-line', 'current-time', 'last-update',
      'loading-state', 'no-selection', 'error-state', 'error-message',
      'train-data', 'platform-up', 'platform-down'
    ];
    
    let missingElements = [];
    requiredElements.forEach(id => {
      if (!document.getElementById(id)) {
        missingElements.push(id);
      }
    });
    
    if (missingElements.length > 0) {
      console.error('Missing DOM elements:', missingElements);
      return;
    }
    
    populateLineSelect();
    setupEventListeners();
    startClock();
    showNoSelection();
    
    appState.initialized = true;
    console.log('App initialized successfully');
    
  } catch (error) {
    console.error('Error initializing app:', error);
  }
}

function populateLineSelect() {
  const lineSelect = document.getElementById('line-select');
  if (!lineSelect) {
    console.error('Line select element not found');
    return;
  }
  
  lineSelect.innerHTML = '<option value="">Choose a line...</option>';
  
  Object.keys(MTR_DATA).forEach(lineCode => {
    const option = document.createElement('option');
    option.value = lineCode;
    option.textContent = MTR_DATA[lineCode].name;
    lineSelect.appendChild(option);
  });
  
  console.log('Line select populated with', Object.keys(MTR_DATA).length, 'lines');
}

function populateStationSelect(lineCode) {
  const stationSelect = document.getElementById('station-select');
  if (!stationSelect) {
    console.error('Station select element not found');
    return;
  }
  
  stationSelect.innerHTML = '<option value="">Choose a station...</option>';
  
  if (lineCode && MTR_DATA[lineCode]) {
    MTR_DATA[lineCode].stations.forEach(station => {
      const option = document.createElement('option');
      option.value = station.code;
      option.textContent = station.name;
      stationSelect.appendChild(option);
    });
    stationSelect.disabled = false;
    console.log('Station select populated with', MTR_DATA[lineCode].stations.length, 'stations for line', lineCode);
  } else {
    stationSelect.disabled = true;
    console.log('Station select disabled');
  }
}

function setupEventListeners() {
  const lineSelect = document.getElementById('line-select');
  const stationSelect = document.getElementById('station-select');
  const refreshBtn = document.getElementById('refresh-btn');
  
  if (!lineSelect || !stationSelect || !refreshBtn) {
    console.error('Required elements not found for event listeners');
    return;
  }
  
  // Line selection handler
  lineSelect.addEventListener('change', function() {
    const selectedLine = this.value;
    console.log('Line changed to:', selectedLine);
    
    currentLine = selectedLine;
    currentStation = '';
    
    populateStationSelect(selectedLine);
    stationSelect.value = '';
    refreshBtn.disabled = true;
    
    clearRefreshInterval();
    showNoSelection();
  });

  // Station selection handler
  stationSelect.addEventListener('change', function() {
    const selectedStation = this.value;
    console.log('Station changed to:', selectedStation);
    
    currentStation = selectedStation;
    
    if (selectedStation && currentLine) {
      refreshBtn.disabled = false;
      updateStationInfo();
      fetchTrainData();
      startAutoRefresh();
    } else {
      refreshBtn.disabled = true;
      clearRefreshInterval();
      showNoSelection();
    }
  });

  // Refresh button handler
  refreshBtn.addEventListener('click', function(event) {
    event.preventDefault();
    console.log('Refresh button clicked');
    
    if (currentLine && currentStation && !appState.isRefreshing) {
      fetchTrainData();
    }
  });
  
  console.log('Event listeners set up successfully');
}

function updateStationInfo() {
  const currentStationEl = document.getElementById('current-station');
  const currentLineEl = document.getElementById('current-line');
  
  if (!currentStationEl || !currentLineEl) {
    console.error('Station info elements not found');
    return;
  }
  
  if (currentLine && currentStation) {
    const lineName = MTR_DATA[currentLine].name;
    const stationName = MTR_DATA[currentLine].stations.find(
      s => s.code === currentStation
    )?.name || currentStation;
    
    currentStationEl.textContent = stationName;
    currentLineEl.textContent = lineName;
    
    console.log('Station info updated:', stationName, 'on', lineName);
  }
}

function startClock() {
  const currentTimeEl = document.getElementById('current-time');
  
  if (!currentTimeEl) {
    console.error('Current time element not found');
    return;
  }
  
  function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-HK', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
    currentTimeEl.textContent = timeString;
  }
  
  updateClock();
  setInterval(updateClock, 1000);
  console.log('Clock started');
}

function startAutoRefresh() {
  clearRefreshInterval();
  refreshInterval = setInterval(() => {
    if (currentLine && currentStation && !appState.isRefreshing) {
      console.log('Auto-refreshing train data...');
      fetchTrainData();
    }
  }, CONFIG.updateFrequency);
  console.log('Auto-refresh started');
}

function clearRefreshInterval() {
  if (refreshInterval) {
    clearInterval(refreshInterval);
    refreshInterval = null;
    console.log('Auto-refresh stopped');
  }
}

async function fetchTrainData() {
  if (!currentLine || !currentStation) {
    console.warn('Missing line or station for API call');
    return;
  }
  
  if (appState.isRefreshing) {
    console.log('Already refreshing, skipping...');
    return;
  }
  
  console.log('Fetching train data for:', currentLine, currentStation);
  
  appState.isRefreshing = true;
  showLoading();
  setRefreshButtonState(true);
  
  try {
    const params = new URLSearchParams({
      line: currentLine,
      sta: currentStation,
      lang: CONFIG.language
    });
    
    const apiUrl = `${CONFIG.apiEndpoint}?${params}`;
    console.log('API URL:', apiUrl);
    
    const response = await fetch(apiUrl);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    console.log('API Response:', data);
    
    if (data.message && data.message.includes('Redis Operate Error')) {
      throw new Error('Service temporarily unavailable');
    }
    
    displayTrainData(data);
    updateLastUpdateTime();
    appState.hasError = false;
    
  } catch (error) {
    console.error('Error fetching train data:', error);
    showError(error.message || 'Unable to load train information');
    appState.hasError = true;
  } finally {
    appState.isRefreshing = false;
    setRefreshButtonState(false);
  }
}

function displayTrainData(data) {
  const platformUp = document.getElementById('platform-up');
  const platformDown = document.getElementById('platform-down');
  
  if (!platformUp || !platformDown) {
    console.error('Platform elements not found');
    return;
  }
  
  // Clear previous data
  platformUp.innerHTML = '';
  platformDown.innerHTML = '';
  
  if (!data.data || !data.data[`${currentLine}-${currentStation}`]) {
    console.warn('No train data in response');
    showError('No train data available for this station');
    return;
  }
  
  const stationData = data.data[`${currentLine}-${currentStation}`];
  console.log('Station data:', stationData);
  
  // Process UP direction
  if (stationData.UP && stationData.UP.length > 0) {
    stationData.UP.slice(0, 4).forEach(train => {
      const trainElement = createTrainElement(train, 'UP');
      platformUp.appendChild(trainElement);
    });
  } else {
    platformUp.innerHTML = '<div class="no-trains">No trains scheduled</div>';
  }
  
  // Process DOWN direction
  if (stationData.DOWN && stationData.DOWN.length > 0) {
    stationData.DOWN.slice(0, 4).forEach(train => {
      const trainElement = createTrainElement(train, 'DOWN');
      platformDown.appendChild(trainElement);
    });
  } else {
    platformDown.innerHTML = '<div class="no-trains">No trains scheduled</div>';
  }
  
  showTrainData();
}

function createTrainElement(train, direction) {
  const trainEntry = document.createElement('div');
  trainEntry.className = 'train-entry new-data';
  
  const destination = train.dest || 'Unknown';
  const time = train.time || train.ttnt || 0;
  const platform = train.plat || (direction === 'UP' ? '1' : '2');
  
  let timeDisplay = '';
  let timeClass = '';
  
  if (time === 0 || time === '0') {
    timeDisplay = 'Departing';
    timeClass = 'departing';
  } else if (time === 1 || time === '1') {
    timeDisplay = 'Arriving';
    timeClass = 'arriving';
  } else {
    timeDisplay = `${time} min`;
    timeClass = '';
  }
  
  trainEntry.innerHTML = `
    <div class="train-info">
      <div class="train-destination">${destination}</div>
      <div class="train-details">Platform ${platform}</div>
    </div>
    <div class="train-time">
      <div class="arrival-time ${timeClass}">${timeDisplay}</div>
      <div class="platform-info">Track ${direction}</div>
    </div>
  `;
  
  // Remove animation class after animation completes
  setTimeout(() => {
    trainEntry.classList.remove('new-data');
  }, 500);
  
  return trainEntry;
}

function showLoading() {
  const elements = {
    loading: document.getElementById('loading-state'),
    noSelection: document.getElementById('no-selection'),
    error: document.getElementById('error-state'),
    trainData: document.getElementById('train-data')
  };
  
  if (elements.loading) elements.loading.classList.remove('hidden');
  if (elements.noSelection) elements.noSelection.classList.add('hidden');
  if (elements.error) elements.error.classList.add('hidden');
  if (elements.trainData) elements.trainData.classList.add('hidden');
}

function showNoSelection() {
  const elements = {
    loading: document.getElementById('loading-state'),
    noSelection: document.getElementById('no-selection'),
    error: document.getElementById('error-state'),
    trainData: document.getElementById('train-data')
  };
  
  if (elements.loading) elements.loading.classList.add('hidden');
  if (elements.noSelection) elements.noSelection.classList.remove('hidden');
  if (elements.error) elements.error.classList.add('hidden');
  if (elements.trainData) elements.trainData.classList.add('hidden');
}

function showError(message) {
  const errorMessage = document.getElementById('error-message');
  if (errorMessage) {
    errorMessage.textContent = message;
  }
  
  const elements = {
    loading: document.getElementById('loading-state'),
    noSelection: document.getElementById('no-selection'),
    error: document.getElementById('error-state'),
    trainData: document.getElementById('train-data')
  };
  
  if (elements.loading) elements.loading.classList.add('hidden');
  if (elements.noSelection) elements.noSelection.classList.add('hidden');
  if (elements.error) elements.error.classList.remove('hidden');
  if (elements.trainData) elements.trainData.classList.add('hidden');
}

function showTrainData() {
  const elements = {
    loading: document.getElementById('loading-state'),
    noSelection: document.getElementById('no-selection'),
    error: document.getElementById('error-state'),
    trainData: document.getElementById('train-data')
  };
  
  if (elements.loading) elements.loading.classList.add('hidden');
  if (elements.noSelection) elements.noSelection.classList.add('hidden');
  if (elements.error) elements.error.classList.add('hidden');
  if (elements.trainData) elements.trainData.classList.remove('hidden');
}

function setRefreshButtonState(isRefreshing) {
  const btn = document.getElementById('refresh-btn');
  const text = document.getElementById('refresh-text');
  
  if (!btn || !text) {
    console.error('Refresh button elements not found');
    return;
  }
  
  if (isRefreshing) {
    btn.classList.add('refreshing');
    text.textContent = 'Refreshing...';
    btn.disabled = true;
  } else {
    btn.classList.remove('refreshing');
    text.textContent = 'Refresh';
    btn.disabled = !(currentLine && currentStation);
  }
}

function updateLastUpdateTime() {
  const lastUpdate = document.getElementById('last-update');
  if (!lastUpdate) {
    console.error('Last update element not found');
    return;
  }
  
  const now = new Date();
  const timeString = now.toLocaleTimeString('en-HK', {
    hour12: false,
    hour: '2-digit',
    minute: '2-digit'
  });
  lastUpdate.textContent = `Last updated: ${timeString}`;
  lastUpdateTime = now;
}

// Cleanup when page is closed
window.addEventListener('beforeunload', function() {
  clearRefreshInterval();
});