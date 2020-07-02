export class Topology {
    static ITopologyStardard = {
        title: {
            text: '网络拓扑图'
        },
        tooltip: {
            trigger: 'item',
            formatter: '{b}',
        },
        //backgroundColor: "#F5F5F5",
        xAxis: {
            min: 0,
            max: 12,
            show: false,
            type: 'value'
        },
        yAxis: {
            min: 0,
            max: 12,
            show: false,
            type: 'value'
        },
        series: [{
            type: 'graph',
            layout: 'none',
            id: 'a',
            coordinateSystem: 'cartesian2d',
            edgeSymbol: ['', 'arrow'],
            // symbolSize: 50,
            label: {
                normal: {
                    show: true,
                    position: 'bottom',
                    color: '#12b5d0'
                }
            },
            lineStyle: {
                normal: {
                    width: 2,
                    shadowColor: 'none'
                }
            },
            xAxis: {
                min: 0,
                max: 12,
                show: false,
                type: 'value'
            },
            yAxis: {
                min: 0,
                max: 12,
                show: false,
                type: 'value'
            },
            // edgeSymbolSize: 8,
            draggable: true,
            data: [],
            links: [],
            z: 4,
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        formatter: function (item) {
                            return item.data.name
                        }
                    }
                }
            }
        }, {
            name: 'A',
            type: 'lines',
            coordinateSystem: 'cartesian2d',
            z: 4,
            effect: {
                show: true,
                trailLength: 0,
                symbol: 'arrow',
                color: '#12b5d0',
                symbolSize: 8
            },
            lineStyle: {
                normal: {
                    curveness: 0
                }
            },
            data: [],

        }]
    };
}