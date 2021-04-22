const chart = {
    chart: {
        type: 'column',
        renderTo: 'chart-disability',
        width: 450,
        height: 500
    },
    title: { text: 'Disability' },
    subtitle: { text: '12% of our team have a disability.' },
    xAxis: { categories: ['MoJ D&T', 'UK'] },
    legend: { reversed: true },
    series: [{
        name: 'Has no disability',
        data: [88, 81]
    }, {
        name: 'Has disability in the UK',
        data: [0, 19],
        dataLabels: MOJDI.charts.dataLabel
    }, {
        name: 'Has disability at MoJ D&T',
        data: [12, 0],
        dataLabels: MOJDI.charts.dataLabel
    }]
};

module.exports = chart;
