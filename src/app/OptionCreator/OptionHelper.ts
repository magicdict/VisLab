import { ECharts } from 'echarts';
import { OptionBase, VisualMap } from './OptionBase';

export class OptionHelper {
  /**
   * 添加VisualMap
   * @param option 需要添加的图表配置 
   * @param max VisualMap最大值
   * @param colorlist inRange颜色列表
   */
  public static chart_SetVisualMap(option: OptionBase, max: number, colorlist: string[]) {
    let v = new VisualMap();
    v.max = max;
    v.min = 0;
    v.inRange.color = colorlist;
    v.calculable = true;
    option.visualMap.push(v);
  }

  public static chart_SetVisualMap_Min(option: OptionBase, max: number, min: number, colorlist: string[]) {
    let v = new VisualMap();
    v.max = max;
    v.min = min;
    v.inRange.color = colorlist;
    v.calculable = true;
    option.visualMap.push(v);
  }

  /**背景色 */
  public static chart_SetBackGroundColor(option: any, color: any) {
    option["backgroundColor"] = color;
  }


  public static chart_SetBackGroundImage(option: OptionBase, url: string, repeat: boolean) {
    var img = new Image();
    img.src = url;
    if (repeat) {
      option['backgroundColor'] = { 'image': img, type: "pattern", repeat: "repeat" };
    } else {
      option['backgroundColor'] = { 'image': img, type: "pattern", repeat: "no-repeat" };
    }
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

  /**
   * 
   * @param url 地址
   * @param height 高度
   * @param width 宽度
   * @param origin 旋转和缩放的中心点
   * @param top 顶端距离
   * @param bottom 低端距离
   * @param left 左边据
   * @param right 右边据
   */
  public static chart_CreateGraphic_Image(url: string, height?: number, width?: number, origin?: number[],
    top?: number, bottom?: number, left?: number, right?: number) {
    let graphic = {
      type: 'image',
      id: 'logo',
      z: -10,
      bounding: 'raw',
      style: {
        image: url
      },
      cursor: 'default'  //默认为pointer
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

  public static chart_CreateGraphic_group(children: any[], totation: number, top?: number, bottom?: number, left?: number, right?: number) {
    let graphic = {
      type: 'group',
      rotation: totation,
      bounding: 'raw',
      z: 100,
      children: children,
      cursor: 'default'  //默认为pointer
    }

    if (top) graphic['top'] = top;
    if (bottom) graphic['bottom'] = bottom;
    if (left) graphic['left'] = left;
    if (right) graphic['right'] = right;
    return graphic;
  }

  public static chart_CreateGraphic_rect(width: number, height: number, color: string) {
    let graphic = {
      type: 'rect',
      left: 'center',
      top: 'center',
      z: 100,
      shape: {
        width: width,
        height: height
      },
      style: {
        fill: color
      },
      cursor: 'default'  //默认为pointer
    }
    return graphic;
  }


  public static chart_CreateGraphic_Text(text: string, color: string) {
    let graphic = {
      type: 'text',
      left: 'center',
      top: 'center',
      z: 100,
      style: {
        fill: color,
        text: text,
        font: 'bold 26px Microsoft YaHei'
      },
      cursor: 'default'  //默认为pointer
    }
    return graphic;
  }

}