const chart = {
    chart: {
        type: 'column',
        renderTo: 'chart-faith',
        width: 450,
        height: 500
    },
    title: { text: 'Faith' },
    subtitle: { text: '58% of our team have a religion.' },
    xAxis: { categories: ['MoJ D&T', 'UK'] },
    legend: { reversed: true },
    series: [{
        name: 'No religion or undeclared',
        data: [42, 34]
    }, {
        name: 'Christian and other religion in the UK',
        data: [0, 66],
        dataLabels: MOJDI.charts.dataLabel
    }, {
        name: 'Christian and other religion at MoJ D&T',
        data: [58, 0],
        dataLabels: MOJDI.charts.dataLabel
    }]
};

module.exports = chart;
