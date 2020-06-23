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
        xAxis: {
            type: 'category',
            boundaryGap: true,  //坐标轴两边留白策略，类目轴和非类目轴的设置和表现不一样。
            data: [],
        },
        yAxis: {
            type: 'value'
        },
        series: []
    };
    static LineItem = {
        name: '',
        type: 'line',
        data: []
    };

    public static CreateLineItem(value: number[]){
        let item = CommonFunction.clone(this.LineItem);
        item.data = value;
        return item;
    }

    public static CreateLine(category: string[], value: number[]) {
        let o = CommonFunction.clone(this.ILineStardard);
        o.xAxis.data = category;
        o.series.push(this.CreateLineItem(value));
        return o;
    }

}