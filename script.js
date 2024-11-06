
function toggleFilterPanel() {
    const filterPanel = document.getElementById('filter-panel');
    filterPanel.classList.toggle('hidden');
}

// Initialize Charts
window.onload = function () {
    const ctx1 = document.getElementById('chart1').getContext('2d');
    const ctx2 = document.getElementById('chart2').getContext('2d');
    const ctx3 = document.getElementById('chart3').getContext('2d');
    const ctx4 = document.getElementById('chart4').getContext('2d');
    const ctx5 = document.getElementById('chart5').getContext('2d');
    const ctx6 = document.getElementById('chart6').getContext('2d');

    // Line Chart
    new Chart(ctx1, {
        type: 'line', data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], datasets: [{
                label: 'Sales',
                data: [120, 190, 300, 500, 200, 300],
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2
            }]
        }, options: {responsive: true}
    });

    // Bar Chart
    new Chart(ctx2, {
        type: 'bar', data: {
            labels: ['Q1', 'Q2', 'Q3', 'Q4'], datasets: [{
                label: 'Revenue', data: [500, 700, 400, 600], backgroundColor: 'rgba(153, 102, 255, 0.6)',
            }]
        }, options: {responsive: true}
    });

    // Pie Chart
    new Chart(ctx3, {
        type: 'pie', data: {
            labels: ['Product A', 'Product B', 'Product C'], datasets: [{
                data: [300, 50, 100], backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
            }]
        }, options: {responsive: true}
    });

    // Doughnut Chart
    new Chart(ctx4, {
        type: 'doughnut', data: {
            labels: ['Direct', 'Referral', 'Social'], datasets: [{
                data: [350, 200, 150], backgroundColor: ['#4BC0C0', '#FF6384', '#FF9F40']
            }]
        }, options: {responsive: true}
    });

    // Radar Chart
    new Chart(ctx5, {
        type: 'radar', data: {
            labels: ['Design', 'Development', 'Marketing', 'Sales', 'Support'], datasets: [{
                label: 'Skill Levels',
                data: [65, 59, 90, 81, 56],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
            }, {
                label: 'Satisfaction Levels',
                data: [75, 80, 85, 90, 70],
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderColor: 'rgba(153, 102, 255, 1)',
            }, {
                label: 'Efficiency Levels',
                data: [88, 72, 95, 65, 80],
                backgroundColor: 'rgba(255, 159, 64, 0.2)',
                borderColor: 'rgba(255, 159, 64, 1)',
            }, {
                label: 'Progress Status',
                data: [70, 85, 80, 60, 90],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
            }]
        }, options: {responsive: true}
    });

    // Polar Area Chart
    new Chart(ctx6, {
        type: 'polarArea', data: {
            labels: ['North America', 'Europe', 'Asia', 'South America'], datasets: [{
                data: [300, 150, 100, 80], backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0']
            }]
        }, options: {responsive: true}
    });
}
