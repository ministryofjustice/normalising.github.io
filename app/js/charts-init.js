MOJDI = MOJDI || {};

//init
MOJDI.charts = {};

// default label settings for column charts
MOJDI.charts.dataLabel = {
    enabled: true,
    formatter: function () {
        return (this.y > 0 ? this.y + '%' : null);
    },
    style: {
        textOutline: 'none',
        fontSize: 14,
        fontWeight: 'normal'
    }
};

// global chart options
MOJDI.charts.default = {
    chart: {
        events: {
        },
        style: {
        },
        height: (3 / 4 * 100) + '%', // 4:3 ratio
        marginTop: 158,
        spacing: [30, 0, 30, 0]
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    credits: {
        enabled: false
    },
    title: {
        style: {
            fontFamily: "PT Sans",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "36px",
            color: "#0B0C0C"
        },
        margin: 20,
        align: 'left'
    },
    plotOptions: {
        series: { stacking: 'percent' }
    },
    subtitle: {
        style: {
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "17px",
            lineHeight: "26px",
            color: "#0B0C0C",
            position: 'absolute'
        },
        widthAdjust: +60,
        align: "left"
    },
    xAxis: {
        labels: {
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        },
        lineColor: '#2d2d2d',
        lineWidth: 2
    },
    yAxis: {
        min: 0, max: 100,
        title: { text: null },
        labels: {
            formatter: function () {
                return '';
            }
        }
    },
    loading: {
        labelStyle: {
            color: 'white'
        },
        style: {
            backgroundColor: 'gray'
        }
    },
    legend: {
        align: 'left',
        verticalAlign: 'top',
        backgroundColor: '#FFFFFF',
        margin: 0
    }
};

MOJDI.charts.merge = (...options) => {
    let chartOptions = {};

    // Merge chart objects
    let merger = (obj) => {
        for (let prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                if (Object.prototype.toString.call(obj[prop]) === '[object Object]') {
                    // If we're doing a deep merge and the property is an object
                    chartOptions[prop] = MOJDI.charts.merge(chartOptions[prop], obj[prop]);
                } else {
                    // Otherwise, do a regular merge
                    chartOptions[prop] = obj[prop];
                }
            }
        }
    };

    // Loop through each object and conduct a merge
    for (let i = 0; i < options.length; i++) {
        merger(options[i]);
    }

    return chartOptions;
};

MOJDI.charts.Options = (options) => MOJDI.charts.merge(MOJDI.charts.default, options);

module.exports = MOJDI.charts;
