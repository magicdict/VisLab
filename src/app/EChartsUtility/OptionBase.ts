import { Radar } from './Series/Radar';
import { PolarConfig, AngleAxis, RadiusAxis } from './Series/Polar';
import { Calendar } from './Calendar';
import { AxisType, SymbolType } from './Enum';
import { ItemStyle } from './Style';
import { EChartTitleOption, EChartOption } from 'echarts';
import { BMapConfig } from './Series/BaiduMap';

export const coordinateSystem_bmap = "bmap";                //百度地图
export const coordinateSystem_calendar = "calendar";        //日历
export const coordinateSystem_cartesian2d = "cartesian2d";  //2维
export const coordinateSystem_geo = "geo";                  //地理
export const coordinateSystem_polar = "polar";              //极坐标

//暂时无法直接使用ECharts的完整结构EChartOption
export class OptionBase {
    public title?: EChartTitleOption = undefined;
    public legend?: EChartOption.Legend = undefined;
    //极坐标用
    public polar?: PolarConfig = undefined;
    public angleAxis?: AngleAxis = undefined;
    public radiusAxis?: RadiusAxis = undefined;
    //平行坐标系

    //单轴
    public singleAxis?: EChartOption.SingleAxis = undefined;
    //雷达用
    public radar?: Radar.RadarConfig = undefined;
    //时间轴用
    public dataZoom?: EChartOption.DataZoom[] = undefined;
    public visualMap?: EChartOption.VisualMap[] = [];
    public tooltip?: EChartOption.Tooltip = undefined;
    public grid?: EChartOption.Grid[] = undefined;  //这里必须设定为undefined，否则js端报错
    public graphic?: any[] = undefined;
    //日历用
    public calendar?: Calendar.CalendarConfig = undefined;
    public xAxis?: EChartOption.XAxis[] = undefined; //这里虽然支持单个的Axis，不过会造成TS的智能提示混乱，所以统一为Array
    public yAxis?: EChartOption.YAxis[] = undefined;
    public geo?: any = undefined;
    public bmap?: BMapConfig = undefined;
    //数据序列
    public series?: Series[] = [];
    public backgroundColor?: any = undefined;
    //注意，这个即使是undefined也会造成无法绘制，原因是破坏了既定值，所以点的颜色都是没有的
    public color?: string[] = ['#c23531', '#2f4554', '#61a0a8', '#d48265', '#91c7ae', '#749f83', '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3'];
    public textStyle?: EChartOption.BaseTextStyle;
    /**是否开启动画。 */
    public animation?: boolean = true;
    /**是否开启动画的阈值，当单个系列显示的图形数量大于这个阈值时会关闭动画。 */
    public animationThreshold?: number = 2000;
    //工具箱
    public toolbox?: any = undefined;
}




//过渡用
export class Axis {
    public name?: string;
    public type?: AxisType;
    public data?: string[];
    public gridIndex?: number;
    public axisLabel?: any;
    public axisLine?: any;
    public show?: boolean;
}

export class Chart3D extends OptionBase {
    public globe: any;
    public geo3D: any;
    public mapbox3D: any;
    public grid3D: Grid3D = new Grid3D();    //必须项目
    public xAxis3D?: Axis;
    public yAxis3D?: Axis;
    public zAxis3D?: Axis;
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
    public data?: any[];
    public type?: string;
    public symbolSize?: any;
    public symbol?: string;
    public itemStyle?: ItemStyle = new ItemStyle();
    public label?: Label = new Label();
    public emphasis?: Emphasis = new Emphasis();
    public xAxisIndex?: number;
    public yAxisIndex?: number;
    public coordinateSystem?: string;  //饼图是没有这个坐标系统的，所以不能有初始值
    public color?: string[];
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

