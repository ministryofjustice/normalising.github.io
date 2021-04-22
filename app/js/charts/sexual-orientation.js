const chart = {
    chart: {
        type: 'column',
        renderTo: 'chart-sexual-orientation',
        width: 450,
        height: 500
    },
    title: { text: 'Sexual orientation' },
    subtitle: { text: '6% of our team identify as lesbian, gay, bisexual or ‘other’.' },
    xAxis: { categories: ['MoJ D&T', 'UK'] },
    legend: { reversed: true },
    series: [{
        name: 'Straight',
        data: [94, 98]
    }, {
        name: 'LGB or other in the UK',
        data: [0, 2],
        dataLabels: MOJDI.charts.dataLabel
    }, {
        name: 'LGB or other at MoJ D&T',
        data: [6, 0],
        dataLabels: MOJDI.charts.dataLabel
    }]
};

module.exports = chart;
