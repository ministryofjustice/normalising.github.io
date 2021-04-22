const chart = {
    chart: {
        type: 'column',
        renderTo: 'chart-gender'
    },
    title: { text: 'Gender' },
    subtitle: { text: '41% of our team and 45% of our senior management identify as female.' },
    xAxis: {
        categories: [
            'MoJ D&T',
            'MoJ D&T Senior Management',
            'UK'
        ]
    },
    legend: { reversed: true },
    series: [{
        name: 'Male',
        data: [59, 55, 49]
    }, {
        name: 'Female in the UK',
        data: [0, 0, 51],
        dataLabels: MOJDI.charts.dataLabel
    }, {
        name: 'Female at MoJ D&T',
        data: [41, 45, 0],
        dataLabels: MOJDI.charts.dataLabel
    }]
};

module.exports = chart;
