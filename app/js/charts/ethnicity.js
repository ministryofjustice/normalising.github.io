const chart = {
    chart: {
        type: 'column',
        renderTo: 'chart-ethnicity',
        width: 450,
        height: 500
    },
    title: { text: 'Ethnicity' },
    subtitle: { text: '21% of our team identify as Black and Minority Ethnic (BME)*.' },
    xAxis: { categories: ['MoJ D&T', 'UK'] },
    legend: { reversed: true },
    series: [{
        name: 'White',
        data: [79, 87]
    }, {
        name: 'BMA in the UK',
        data: [0, 13],
        dataLabels: MOJDI.charts.dataLabel
    }, {
        name: 'BME at MoJ D&T',
        data: [21, 0],
        dataLabels: MOJDI.charts.dataLabel
    }]
};

module.exports = chart;
