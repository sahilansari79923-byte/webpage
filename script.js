// Global defaults for dark theme
Chart.defaults.color = '#FFFFFF';
Chart.defaults.font.family = "'Segoe UI', Tahoma, sans-serif";
Chart.defaults.plugins.legend.position = 'bottom';
Chart.defaults.plugins.legend.labels.boxWidth = 12;

const gridOptions = {
    color: '#2D3748',
    tickColor: 'transparent'
};

// Standard Data
const baseData = {
    donut: [54864, 35545, 11357],
    age: [1.2, 3.5, 4.2, 5.1, 6.8, 7.5, 9.2, 10.5, 11.2, 9.8],
    race: [8.9, 8.8, 8.2, 7.5, 6.8],
    insulin: [8.1, 8.5, 9.2, 10.3],
    a1c: [8.9, 5.5, 7.2, 8.5]
};

// Chart References
let donutObj, ageObj, raceObj, insulinObj, a1cObj;

// 1. Donut Chart
donutObj = new Chart(document.getElementById('donutChart'), {
    type: 'doughnut',
    data: {
        labels: ['Not Readmitted', '>30 Days', '<30 Days'],
        datasets: [{
            data: [...baseData.donut],
            backgroundColor: ['#10B981', '#F59E0B', '#EF4444'],
            borderWidth: 0
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '60%'
    }
});

// 2. Horizontal Bar: Age
ageObj = new Chart(document.getElementById('ageChart'), {
    type: 'bar',
    data: {
        labels: ['0-10', '10-20', '20-30', '30-40', '40-50', '50-60', '60-70', '70-80', '80-90', '90-100'],
        datasets: [{
            label: 'Rate %',
            data: [...baseData.age],
            backgroundColor: (ctx) => {
                const val = ctx.raw || 0;
                return val > 8.8 ? '#0D9488' : '#99F6E4'; 
            }
        }]
    },
    options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: { grid: gridOptions },
            y: { grid: {display: false} }
        },
        plugins: { legend: { display: false } }
    }
});

// 3. Horizontal Bar: Race
raceObj = new Chart(document.getElementById('raceChart'), {
    type: 'bar',
    data: {
        labels: ['Caucasian', 'AfricanAmerican', 'Hispanic', 'Other', 'Asian'],
        datasets: [{
            label: 'Rate %',
            data: [...baseData.race],
            backgroundColor: '#0D9488'
        }]
    },
    options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: { grid: gridOptions },
            y: { grid: {display: false} }
        },
        plugins: { legend: { display: false } }
    }
});

// 4. Bar: Insulin
insulinObj = new Chart(document.getElementById('insulinChart'), {
    type: 'bar',
    data: {
        labels: ['No', 'Steady', 'Up', 'Down'],
        datasets: [{
            label: 'Rate %',
            data: [...baseData.insulin],
            backgroundColor: ['#0D9488', '#0D9488', '#0D9488', '#EF4444']
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: { grid: gridOptions },
            x: { grid: {display: false} }
        },
        plugins: { legend: { display: false } }
    }
});

// 5. Bar: A1C
a1cObj = new Chart(document.getElementById('a1cChart'), {
    type: 'bar',
    data: {
        labels: ['Not Tested', 'Norm', '>7', '>8'],
        datasets: [{
            label: 'Rate %',
            data: [...baseData.a1c],
            backgroundColor: ['#F97316', '#0D9488', '#0D9488', '#0D9488']
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: { grid: gridOptions },
            x: { grid: {display: false} }
        },
        plugins: { legend: { display: false } }
    }
});

// 6. Bar: Hospital Stay
new Chart(document.getElementById('hospChart'), {
    type: 'bar',
    data: {
        labels: ['Not Readmitted', '>30 Days', '<30 Days'],
        datasets: [{
            label: 'Avg Days',
            data: [4.2, 4.6, 5.3],
            backgroundColor: ['#10B981', '#F59E0B', '#EF4444']
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: { grid: gridOptions, min: 3 },
            x: { grid: {display: false} }
        },
        plugins: { legend: { display: false } }
    }
});

// 7. Combo: Diagnoses
new Chart(document.getElementById('diagChart'), {
    type: 'bar',
    data: {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
        datasets: [
            {
                label: 'Risk %',
                data: [3.1, 3.8, 4.5, 5.2, 6.1, 7.2, 8.1, 8.9, 9.7],
                type: 'line',
                borderColor: '#F97316',
                yAxisID: 'y1'
            },
            {
                label: 'Volume',
                data: [1500, 3200, 5800, 12500, 25000, 31000, 48000, 35000, 28000],
                backgroundColor: '#99F6E4',
                yAxisID: 'y'
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: { 
                type: 'linear', display: true, position: 'left',
                grid: gridOptions, title: {display: false}
            },
            y1: {
                type: 'linear', display: true, position: 'right',
                grid: {drawOnChartArea: false}, title: {display: false}
            },
            x: { grid: {display: false} }
        }
    }
});

// 8. Bar: Medications
new Chart(document.getElementById('medsChart'), {
    type: 'bar',
    data: {
        labels: ['1-5', '6-10', '11-15', '16-20', '21+'],
        datasets: [{
            label: 'Rate %',
            data: [5.8, 7.2, 8.5, 9.3, 10.2],
            backgroundColor: ['#10B981', '#34D399', '#FCD34D', '#F59E0B', '#EF4444']
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: { grid: gridOptions },
            x: { grid: {display: false} }
        },
        plugins: { legend: { display: false } }
    }
});

// --- INTERACTIVITY LOGIC ---
function updateDashboard() {
    // Get current slicer states
    const gender = document.getElementById('slicerGender').value;
    const race = document.getElementById('slicerRace').value;
    const age = document.getElementById('slicerAge').value;
    
    // Random fluctuation logic for demonstration of filter events
    const modifier = (Math.random() * 0.4) + 0.8; 
    
    // Update Top KPIs
    document.querySelector('.kpi-card:nth-child(1) .kpi-value').innerText = Math.floor(101766 * modifier).toLocaleString();
    document.querySelector('.kpi-card:nth-child(2) .kpi-value').innerText = Math.floor(11357 * modifier).toLocaleString();
    document.querySelector('.kpi-card:nth-child(3) .kpi-value').innerText = (11.2 * modifier).toFixed(1) + '%';
    
    // Update underlying Chart Data
    donutObj.data.datasets[0].data = baseData.donut.map(val => Math.floor(val * modifier));
    donutObj.update();
    
    ageObj.data.datasets[0].data = baseData.age.map(val => Number((val * modifier).toFixed(1)));
    ageObj.update();
    
    raceObj.data.datasets[0].data = baseData.race.map(val => Number((val * modifier).toFixed(1)));
    raceObj.update();
    
    insulinObj.data.datasets[0].data = baseData.insulin.map(val => Number((val * modifier).toFixed(1)));
    insulinObj.update();
    
    a1cObj.data.datasets[0].data = baseData.a1c.map(val => Number((val * modifier).toFixed(1)));
    a1cObj.update();
}
