const chart = {
    chart: {
        type: 'item',
        renderTo: 'chart-age'
    },
    title: { text: 'Age' },
    subtitle: { text: 'From youngest to oldest our team spans more than five decades.' },
    plotOptions: {
        series: { stacking: 'normal' }
    },
    xAxis: {
        reversed: true
    },
    yAxis: {
        opposite: true
    },
    series: [{
        name: 'Across D&T',
        keys: ['name', 'y'],
        data: [
            ['20-24', 46],
            ['25-34', 200],
            ['35-44', 80],
            ['45-54', 67],
            ['55-64', 153],
            ['Over 65', 69]
        ],
        dataLabels: {
            enabled: true,
            format: '{point.label}'
        }
    }]
};

module.exports = chart;
