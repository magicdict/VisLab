import { ECharts } from 'echarts';
import { OptionBase, VisualMap } from './OptionBase';

export interface areaStyle {
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


export class OptionHelper {
  /**克隆 */
  public static clone<T>(source: T): T {
    return (JSON.parse(JSON.stringify(source)));
  }
  public static ConvertIntToWeekday(weekday: any) {
    switch (weekday) {
      case "0": return "周日";
      case "1": return "周一";
      case "2": return "周二";
      case "3": return "周三";
      case "4": return "周四";
      case "5": return "周五";
      case "6": return "周六";
    }
  }

  public static chart_SetVisualMap(option:OptionBase,max:number,colorlist:string[]){
    let v = new VisualMap();
    v.max =max;
    v.inRange.color = colorlist;
    v.calculable = true;
    option.visualMap.push(v);
  }

  /**背景色 */
  public static chart_SetBackGroundColor(option: any, color: any) {
    option["backgroundColor"] = color;
  }

  /**工具箱 */
  public static chart_SetToolBox(option: any, saveAsImage: boolean, restore: boolean,
    dataView: boolean, dataZoom: boolean, magicType: boolean, brush: boolean) {
    let toolbox = {
      'show': true,
      'feature': {
      }
    };
    if (saveAsImage) toolbox.feature['saveAsImage'] = {};
    if (restore) toolbox.feature['restore'] = {};
    if (dataView) toolbox.feature['dataView'] = {};
    if (dataZoom) toolbox.feature['dataZoom'] = {};
    if (magicType) toolbox.feature['magicType'] = { type: ['line', 'bar', 'stack', 'tiled'] };
    if (brush) toolbox.feature['brush'] = {};
    option["toolbox"] = toolbox;
  }

  public static SaveChartImage(echartsInstance: ECharts, filename: string) {
    var img = new Image();
    img.src = echartsInstance.getDataURL({
      pixelRatio: 2,
      backgroundColor: '#fff'
    });
    // IE 11
    if (window.navigator.msSaveBlob !== undefined) {
      var blob = this.base64ToBlob(img.src);
      window.navigator.msSaveBlob(blob, filename + '.png');
      return;
    }
    var a = document.createElement('a');
    a.download = filename;
    a.href = img.src;
    var event = new MouseEvent('click');
    a.dispatchEvent(event);
  }


  private static base64ToBlob(code: string): Blob {
    const parts = code.split(';base64,');
    const contentType = parts[0].split(':')[1];
    const raw = window.atob(parts[1]);
    const rawLength = raw.length;
    const uInt8Array = new Uint8Array(rawLength);
    for (let i = 0; i < rawLength; ++i) {
      uInt8Array[i] = raw.charCodeAt(i);
    }
    return new Blob([uInt8Array], { type: contentType });
  }

  /**AreaStyle:
  * @param option - Series 
  */
  public static series_SetAreaStyle(option: any, style: areaStyle) {
    option['areaStyle'] = style;
  }

  /** rich属性用图片 */
  public static series_CreateRichImageStyleItem(url: string, height?: number, width?: number): any {
    let i = {
      backgroundColor: {
        image: url
      }
    }
    if (height) i['height'] = height;
    if (width) i['width'] = width;
    return i;
  }

  /**图片 */
  public static chart_CreateGraphic(url: string, height?: number, width?: number, origin?: number[],
    top?: number, bottom?: number, left?: number, right?: number) {
    let graphic = {
      type: 'image',
      id: 'logo',
      z: -10,
      bounding: 'raw',
      style: {
        image: url
      }
    }
    if (origin) graphic['origin'] = origin;
    if (height) graphic.style['height'] = height;
    if (width) graphic.style['width'] = width;
    if (top) graphic['top'] = top;
    if (bottom) graphic['bottom'] = bottom;
    if (left) graphic['left'] = left;
    if (right) graphic['right'] = right;
    return graphic;
  }

}