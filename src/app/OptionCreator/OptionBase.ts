export class OptionBase {
    public title?: Title;
    public legend?: any;
    public series: Series[] = [];
    public xAxis: Axis; //这些图表是不需要坐标轴的，这里不要直接 new Axis()...
    public yAxis: Axis; //这些图表是不需要坐标轴的，这里不要直接 new Axis()...
    public tooltip?: any = {};
    public visualMap?: VisualMap[] = [];
}


export class Series {
    public data: any[];
    public type: string;
    public symbolSize?: any;
    public itemStyle?: ItemStyle = new ItemStyle();
    public label?: Label = new Label();
    public emphasis?: Emphasis = new Emphasis();
}

export class Emphasis {
    public itemStyle?: ItemStyle = new ItemStyle();
    public label?: Label = new Label();
}

export class Label {
    public color?: string;
    public show?: boolean = true;
    public position?: string;
    public formatter?: any;
    public rich?: any;
}

export class Title {
    public text: string;
}

export class Axis {
    public name: string;
    public type: string;
    public data: string[];
}

export class VisualMap {
    public inRange: any = {
        color: []
    }
    public max: number;
    public calculable: boolean;
}

export class ItemStyle {
    /**
     * 阴影颜色。支持的格式同color。
     */
    color?: any;
    borderColor?: any;
    borderWidth?: any;
    borderType?: any;
    barBorderRadius?: any;
    shadowBlur?: any;
    shadowColor?: any;
    shadowOffsetX?: any;
    shadowOffsetY?: any;
    /**
     * 图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。
     */
    opacity?: any;
}