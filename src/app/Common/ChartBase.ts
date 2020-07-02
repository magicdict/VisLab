export class ChartBase {
    public title?: Title;
    public legend?: any;
    public series: any[] = [];
    public xAxis: Axis; //这些图表是不需要坐标轴的，这里不要直接 new Axis()...
    public yAxis: Axis; //这些图表是不需要坐标轴的，这里不要直接 new Axis()...
    public tooltip?: any = {};
}

export class Title {
    public text: string;
}

export class Axis {
    public type: string;
    public data: string[];
}