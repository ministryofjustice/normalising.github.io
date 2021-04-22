module.exports = {
    chart: {
        type: 'bar',
        renderTo: 'chart-gender-pay-gap'
    },
    title: { text: 'Gender pay gap' },
    subtitle: { text: 'Our gender pay gap is 5.3% mean, 8.7% median***.' },
    xAxis: { categories: ['MoJ D&T', 'Civil Service'] },
    yAxis: {
        min: 0, max: 100,
        title: { text: '' }
    },
    legend: { reversed: true },
    plotOptions: {
        series: { stacking: 'normal' }
    },
    series: [{
        name: 'Male',
        data: [50, 50]
    }, {
        name: 'Pay gap',
        data: [5.3, 9.2],
        dataLabels: MOJDI.charts.dataLabel
    }, {
        name: 'Female',
        data: [44.7, 40.8],
        dataLabels: MOJDI.charts.dataLabel
    }]
};
