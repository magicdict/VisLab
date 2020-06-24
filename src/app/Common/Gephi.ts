export class Gephi {
    static IGephiStardard = {
        title: {
            text: '',
            subtext: '',
            top: 'bottom',
            left: 'right'
        },
        graphic: [
            {
                type: 'image',
                id: 'logo',
                right: 20,
                top: 20,
                z: -10,
                bounding: 'raw',
                origin: [75, 75],
                style: {
                    image: 'assets/security/net_gexf_color.png',
                    width: 200,
                    height: 250,
                }
            }],
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