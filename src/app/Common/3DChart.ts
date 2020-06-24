import { CommonFunction } from './common';
export class Scatter3D {
    static IScatter3DStardard = {
        grid3D: {},
        xAxis3D: {},
        yAxis3D: {},
        zAxis3D: {},
        visualMap: [{
            inRange: {
                color: ['blue', 'blue', 'green', 'yellow', 'red']
            },
            max: 0,
            calculable: true
        }],
        series: [
            {
                type: 'scatter3D',
                symbolSize: null,
                emphasis: {
                    label: {
                        show: true,
                        formatter: null,
                        position: 'top'
                    }
                },
                data: []
            }
        ]
    };

    static I3DBarStardard = {
        visualMap: {
            max: 300,
            show: false,
            inRange: {
                color: ['#313695', '#4575b4', '#74add1', '#abd9e9',
                    '#e0f3f8', '#ffffbf', '#fee090', '#fdae61',
                    '#f46d43', '#d73027', '#a50026']
            }
        },
        xAxis3D: {
            type: 'category',
            data: [],
            name: '时间'
        },
        yAxis3D: {
            type: 'category',
            data: [],
            name: '日期'
        },
        zAxis3D: {
            type: 'value',
            name: '流量'
        },
        grid3D: {
            boxWidth: 200,
            boxDepth: 80,
            viewControl: {
                projection: 'orthographic',
            },
            light: {
                main: {
                    intensity: 1.2
                },
                ambient: {
                    intensity: 0.3
                }
            }
        },
        series: [{
            type: 'bar3D',
            data: [],
            shading: 'color',
            label: {
                formatter: '{c}'
            },
            itemStyle: {
                opacity: 0.4
            },
            emphasis: {
                label: {
                    formatter: null,
                    textStyle: {
                        fontSize: 20,
                        color: '#900'
                    }
                },
                itemStyle: {
                    color: '#900'
                }
            }
        }]
    };

    public static Fill3DTime(ds: NameValueSet[], chart: any, zname: string, max: number = -1) {
        //X:具体时间，Y：日期，Z：流量
        var weekday = ["周一", "周二", "周三", "周四", "周五", "周六", "周日"];
        var time = [];
        ds.forEach(
            element => {
                var t = element.Name.split("|")[1];
                if (time.indexOf(t) == -1) time.push(t);
            }
        );
        time = time.sort();
        chart.zAxis3D.name = zname;
        chart.xAxis3D.data = time;
        chart.yAxis3D.data = weekday;
        //三维数组
        var data: any[] = [];
        ds.forEach(element => {
            data.push([element.Name.split("|")[1], CommonFunction.ConvertIntToWeekday(element.Name.split("|")[0]), element.Value]);
        });

        chart.series[0].data = data;
        let x = ds.map(x => x.Value);
        chart.visualMap.max = max === -1 ? Math.max(...x) : max;
        chart.grid3D.boxWidth = 200;
        chart.grid3D.boxDepth = 80;
        chart.grid3D["height"] = 750;
    }

}

export interface NameValueSet {
    Name: string,
    Value: number
}