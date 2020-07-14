import { RadarConfig } from './Radar';
import { PolarConfig, AngleAxis, RadiusAxis } from './PolarOption';
import { CalendarConfig } from './Calendar';
import { AxisType } from './enum';

export const coordinateSystem_bmap = "bmap";                //百度地图
export const coordinateSystem_calendar = "calendar";        //日历
export const coordinateSystem_cartesian2d = "cartesian2d";  //2维
export const coordinateSystem_geo = "geo";                  //地理
export const coordinateSystem_polar = "polar";              //极坐标


export class OptionBase {
    public title?: Title = undefined;
    public legend?: any = undefined;
    //极坐标用
    public polar?: PolarConfig = undefined;
    public angleAxis?: AngleAxis = undefined;
    public radiusAxis?: RadiusAxis = undefined;
    //雷达用
    public radar?: RadarConfig = undefined;
    //时间轴用
    public dataZoom?: DataZoom[] = undefined;
    public visualMap?: VisualMap[] = [];
    public tooltip?: any = {};
    public grid?: Grid[] = undefined;  //这里必须设定为null，否则js端报错
    public graphic?: any[] = undefined;
    //日历用
    public calendar?: CalendarConfig = undefined;
    public xAxis?: Axis | Axis[] = undefined;
    public yAxis?: Axis | Axis[] = undefined;
    public geo?: any = undefined;
    //数据序列
    public series: Series[] = [];
    public backgroundColor?: any = undefined;
    //注意，这个即使是undefined也会造成无法绘制，原因是破坏了既定值，所以点的颜色都是没有的
    public color: string[] = ['#c23531','#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3'];
    /**是否开启动画。 */
    public animation: boolean = true;
    /**是否开启动画的阈值，当单个系列显示的图形数量大于这个阈值时会关闭动画。 */
    public animationThreshold: number = 2000;
}

export class DataZoom {
    public type: string = 'slider';
    public show: boolean;
    public xAxisIndex: number[];
    public yAxisIndex: number[];
    public start: number;
    public end: number;
}

export class Grid {
    public top?: string | number;
    public bottom?: string | number;
    public left?: string | number;
    public right?: string | number;
    public width?: string | number;
    public height?: string | number;
}


export class Chart3D extends OptionBase {
    public globe: any;
    public geo3D: any;
    public mapbox3D: any;
    public grid3D: Grid3D = new Grid3D();    //必须项目
    public xAxis3D: Axis;
    public yAxis3D: Axis;
    public zAxis3D: Axis;
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
    public symbol?: string;
    public itemStyle?: ItemStyle = new ItemStyle();
    public label?: Label = new Label();
    public emphasis?: Emphasis = new Emphasis();
    public xAxisIndex?: number;
    public yAxisIndex?: number;
    public coordinateSystem?: string;  //饼图是没有这个坐标系统的，所以不能有初始值
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
    public type: AxisType;
    public data: string[];
    public gridIndex?: number;
}

export class VisualMap {
    public inRange: any = {
        color: []
    }
    public max: number;
    public min: number;
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