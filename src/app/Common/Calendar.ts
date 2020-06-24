export class Calendar {
    static ICalendarStardard = {
        tooltip: {
            formatter: null
        },
        visualMap: {
            show: true,
            min: 0,
            max: 300,
            calculable: true,
            seriesIndex: [2],
            orient: 'horizontal',
            left: 'center',
            bottom: 20,
        },

        calendar: [{
            left: 'center',
            top: 'middle',
            cellSize: [100, 100],
            yearLabel: { show: false },
            orient: 'vertical',
            dayLabel: {
                firstDay: 1,
                nameMap: 'cn'
            },
            monthLabel: {
                show: false
            },
            range: []
        }],

        series: []
    };

    static ICalendarItem_scatter = {
        type: 'scatter',
        coordinateSystem: 'calendar',
        symbolSize: 1,
        label: {
            normal: {
                show: true,
                formatter: null,
                textStyle: {
                    color: '#000'
                }
            }
        },
        data: []
    };

    static ICalendarItem_heatmap = {
        name: '客流量',
        type: 'heatmap',
        coordinateSystem: 'calendar',
        data: []
    };
}