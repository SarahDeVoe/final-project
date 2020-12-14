Highcharts.chart('container1', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Elephant Populations In Different African Regions'
    },
    subtitle: {
        text: 'Source: <a href="https://portals.iucn.org/library/sites/library/files/documents/SSC-OP-060_A.pdf">portals.iucn.org</a>'
    },
    xAxis: {
        categories: ['Central Africa', 'Eastern Africa', 'Southern Africa', 'West Africa'],
        title: {
            text: null
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Number of Elephants',
            align: 'middle'
        },
        labels: {
            overflow: 'justify'
        }
    },
    tooltip: {
        valueSuffix: ''
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            }
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 80,
        floating: true,
        borderWidth: 1,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
        shadow: true
    },
    credits: {
        enabled: false
    },
    series: [{
    		name: 'Year 2016',
        data: [24119, 86373, 293447, 11489]

    }]
});

Highcharts.chart('container2', {

    title: {
        text: 'African Elephant Population by the Decade, 1970-2020'
    },

    subtitle: {
        text: 'Source: <a href="https://portals.iucn.org/library/sites/library/files/documents/SSC-OP-060_A.pdf">portals.iucn.org</a> and <a href="http://www.greatelephantcensus.com/background-on-conservation">greatelephantcensus.com</a>'
    },

    yAxis: {
        title: {
            text: 'Number of African Elephants'
        }
    },

    xAxis: {
        accessibility: {
            rangeDescription: 'Range: 1970 to 2020'
        }
    },

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 1970,
            pointInterval: 10,
        }
    },

    series: [{
        name: 'African Elephant Population',
        data: [1300000, 600000, 600000, 600000, 415428, 415000]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});
