import { CommonFunction } from './common';

export class LineOption {
    static ILineStardard = {
        title: {
            text: ''
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: []
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: true,  //坐标轴两边留白策略，类目轴和非类目轴的设置和表现不一样。
            data: [],
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: '',
                type: 'line',
                data: []
            }
        ]
    };
    static LineItem = {
        name: '',
        type: 'line',
        data: []
    };

    public static CreateLine(category: string[], value: number[]) {
        let o = CommonFunction.clone(this.ILineStardard);
        o.xAxis.data = category;
        o.series[0].data = value;
        return o;
    }

}