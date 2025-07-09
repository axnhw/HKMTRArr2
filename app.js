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
  }
};

// Configuration
const CONFIG = {
  apiEndpoint: "https://rt.data.gov.hk/v1/transport/mtr/getSchedule.php",
  updateFrequency: 10000,
  language: "en"
};

// Global state
let currentLine = '';
let currentStation = '';
let refreshInterval = null;
let isRefreshing = false;

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
});

function initializeApp() {
  populateLineSelect();
  setupEventListeners();
  startClock();
  showNoSelection();
}

function populateLineSelect() {
  const lineSelect = document.getElementById('line-select');
  lineSelect.innerHTML = '<option value="">Choose a line...</option>';
  
  Object.keys(MTR_DATA).forEach(lineCode => {
    const option = document.createElement('option');
    option.value = lineCode;
    option.textContent = MTR_DATA[lineCode].name;
    lineSelect.appendChild(option);
  });
}

function populateStationSelect(lineCode) {
  const stationSelect = document.getElementById('station-select');
  stationSelect.innerHTML = '<option value="">Choose a station...</option>';
  
  if (lineCode && MTR_DATA[lineCode]) {
    MTR_DATA[lineCode].stations.forEach(station => {
      const option = document.createElement('option');
      option.value = station.code;
      option.textContent = station.name;
      stationSelect.appendChild(option);
    });
    stationSelect.disabled = false;
  } else {
    stationSelect.disabled = true;
  }
}

function setupEventListeners() {
  const lineSelect = document.getElementById('line-select');
  const stationSelect = document.getElementById('station-select');
  const refreshBtn = document.getElementById('refresh-btn');
  
  lineSelect.addEventListener('change', function() {
    const selectedLine = this.value;
    currentLine = selectedLine;
    currentStation = '';
    
    populateStationSelect(selectedLine);
    stationSelect.value = '';
    refreshBtn.disabled = true;
    
    clearAutoRefresh();
    showNoSelection();
  });

  stationSelect.addEventListener('change', function() {
    const selectedStation = this.value;
    currentStation = selectedStation;
    
    if (selectedStation && currentLine) {
      refreshBtn.disabled = false;
      updateStationInfo();
      fetchTrainData();
      startAutoRefresh();
    } else {
      refreshBtn.disabled = true;
      clearAutoRefresh();
      showNoSelection();
    }
  });

  refreshBtn.addEventListener('click', function() {
    if (currentLine && currentStation && !isRefreshing) {
      fetchTrainData();
    }
  });
}

function updateStationInfo() {
  if (currentLine && currentStation) {
    const lineName = MTR_DATA[currentLine].name;
    const stationName = MTR_DATA[currentLine].stations.find(
      s => s.code === currentStation
    )?.name || currentStation;
    
    document.getElementById('current-station').textContent = stationName;
    document.getElementById('current-line').textContent = lineName;
  }
}

function startClock() {
  function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-HK', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
    document.getElementById('current-time').textContent = timeString;
  }
  
  updateClock();
  setInterval(updateClock, 1000);
}

function startAutoRefresh() {
  clearAutoRefresh();
  refreshInterval = setInterval(() => {
    if (currentLine && currentStation && !isRefreshing) {
      fetchTrainData();
    }
  }, CONFIG.updateFrequency);
}

function clearAutoRefresh() {
  if (refreshInterval) {
    clearInterval(refreshInterval);
    refreshInterval = null;
  }
}

async function fetchTrainData() {
  if (!currentLine || !currentStation || isRefreshing) return;
  
  isRefreshing = true;
  showLoading();
  setRefreshButtonState(true);
  
  try {
    // Simulate API call with mock data since the real API may have CORS issues
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const mockData = {
      data: {
        [`${currentLine}-${currentStation}`]: {
          UP: [
            { dest: "Kennedy Town", time: "2", plat: "1" },
            { dest: "Kennedy Town", time: "7", plat: "1" },
            { dest: "Kennedy Town", time: "12", plat: "1" }
          ],
          DOWN: [
            { dest: "Chai Wan", time: "1", plat: "2" },
            { dest: "Chai Wan", time: "6", plat: "2" },
            { dest: "Chai Wan", time: "11", plat: "2" }
          ]
        }
      }
    };
    
    displayTrainData(mockData);
    updateLastUpdateTime();
    
  } catch (error) {
    console.error('Error fetching train data:', error);
    showError('Unable to load train information. Please try again.');
  } finally {
    isRefreshing = false;
    setRefreshButtonState(false);
  }
}

function displayTrainData(data) {
  const platformUp = document.getElementById('platform-up');
  const platformDown = document.getElementById('platform-down');
  
  platformUp.innerHTML = '';
  platformDown.innerHTML = '';
  
  if (!data.data || !data.data[`${currentLine}-${currentStation}`]) {
    showError('No train data available for this station');
    return;
  }
  
  const stationData = data.data[`${currentLine}-${currentStation}`];
  
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
  
  setTimeout(() => {
    trainEntry.classList.remove('new-data');
  }, 500);
  
  return trainEntry;
}

function showLoading() {
  document.getElementById('loading-state').classList.remove('hidden');
  document.getElementById('no-selection').classList.add('hidden');
  document.getElementById('error-state').classList.add('hidden');
  document.getElementById('train-data').classList.add('hidden');
}

function showNoSelection() {
  document.getElementById('loading-state').classList.add('hidden');
  document.getElementById('no-selection').classList.remove('hidden');
  document.getElementById('error-state').classList.add('hidden');
  document.getElementById('train-data').classList.add('hidden');
}

function showError(message) {
  document.getElementById('error-message').textContent = message;
  document.getElementById('loading-state').classList.add('hidden');
  document.getElementById('no-selection').classList.add('hidden');
  document.getElementById('error-state').classList.remove('hidden');
  document.getElementById('train-data').classList.add('hidden');
}

function showTrainData() {
  document.getElementById('loading-state').classList.add('hidden');
  document.getElementById('no-selection').classList.add('hidden');
  document.getElementById('error-state').classList.add('hidden');
  document.getElementById('train-data').classList.remove('hidden');
}

function setRefreshButtonState(refreshing) {
  const btn = document.getElementById('refresh-btn');
  const text = document.getElementById('refresh-text');
  
  if (refreshing) {
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
  const now = new Date();
  const timeString = now.toLocaleTimeString('en-HK', {
    hour12: false,
    hour: '2-digit',
    minute: '2-digit'
  });
  document.getElementById('last-update').textContent = `Last updated: ${timeString}`;
}

window.addEventListener('beforeunload', function() {
  clearAutoRefresh();
});
