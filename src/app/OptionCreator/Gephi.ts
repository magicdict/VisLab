export class Gephi {
    static IGephiStardard = {
        title: {
            text: '',
            subtext: '',
            top: 'bottom',
            left: 'right'
        },
        graphic: [],
        tooltip: {},
        animationDuration: 1500,
        animationEasingUpdate: 'quinticInOut',
        series: [
            {
                //name: 'Les Miserables',
                type: 'graph',
                layout: 'none',
                data: [],
                links: [],
                categories: [],
                roam: true,
                focusNodeAdjacency: true,
                itemStyle: {
                    normal: {
                        borderColor: '#fff',
                        borderWidth: 1,
                        shadowBlur: 10,
                        shadowColor: 'rgba(0, 0, 0, 0.3)'
                    }
                },
                label: {
                    position: 'right',
                    formatter: '{b}'
                },
                lineStyle: {
                    color: 'source',
                    curveness: 0.3
                },
                emphasis: {
                    lineStyle: {
                        width: 10
                    }
                }
            }
        ]
    };
}