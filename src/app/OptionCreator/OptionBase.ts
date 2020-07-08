export const coordinateSystem_bmap = "bmap";                //百度地图
export const coordinateSystem_calendar = "calendar";        //日历
export const coordinateSystem_cartesian2d = "cartesian2d";  //2维
export const coordinateSystem_polar = "polar";              //极坐标


export class OptionBase {
    public title?: Title;
    public legend?: any;
    public series: Series[] = [];
    public tooltip?: any = {};
    public visualMap?: VisualMap[] = [];
    public grid?= null  //这里必须设定为null，否则js端报错
}

export class Chart2D extends OptionBase {
    public xAxis: Axis | Axis[];
    public yAxis: Axis | Axis[];
}

export class Chart3D extends OptionBase {
    public xAxis3D: Axis
    public yAxis3D: Axis
    public zAxis3D: Axis
    public grid3D: Grid3D = new Grid3D();    //必须项目
}

export class Grid3D {
    public boxWidth?: number;
    public boxDepth?: number;
    public viewControl?: any = {
        projection: 'orthographic',
    }
    public light?: any = {
        main: {
            intensity: 1.2
        },
        ambient: {
            intensity: 0.3
        }
    }
}

export class Series {
    public name?: string;
    public data: any[];
    public type: string;
    public symbolSize?: any;
    public itemStyle?: ItemStyle = new ItemStyle();
    public label?: Label = new Label();
    public emphasis?: Emphasis = new Emphasis();
    public xAxisIndex?: number;
    public yAxisIndex?: number;
    public coordinateSystem? : string;  //饼图是没有这个坐标系统的，所以不能有初始值
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
    public gridIndex?: number;
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

export class AreaStyle {
    /**
     * 阴影颜色。支持的格式同color。
     */
    color?: any;
    shadowBlur?: any;
    shadowColor?: any;
    shadowOffsetX?: any;
    shadowOffsetY?: any;
    /**
     * 图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。
     */
    opacity?: any;
}