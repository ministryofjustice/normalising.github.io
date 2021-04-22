const chart = {
    chart: {
        type: 'line',
        renderTo: 'chart-age'
    },
    title: { text: 'Age' },
    subtitle: { text: 'From youngest to oldest our team spans more than five decades.' },
    xAxis: {
        categories: []
    },
    legend: { reversed: true },
    series: [{
        name: 'Over 65',
        data: [59, 55, 49]
    }, {
        name: '55-64',
        data: [0, 0, 51],
        dataLabels: MOJDI.charts.dataLabel
    }, {
        name: '45-54',
        data: [41, 45, 0],
        dataLabels: MOJDI.charts.dataLabel
    }, {
        name: '35-44',
        data: [41, 45, 0],
        dataLabels: MOJDI.charts.dataLabel
    }, {
        name: '25-34',
        data: [41, 45, 0],
        dataLabels: MOJDI.charts.dataLabel
    }, {
        name: '20-24',
        data: [41, 45, 0],
        dataLabels: MOJDI.charts.dataLabel
    }]
};

module.exports = chart;
