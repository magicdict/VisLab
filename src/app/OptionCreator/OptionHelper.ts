import { ECharts } from 'echarts';
import { OptionBase, VisualMap, Grid, DataZoom } from './OptionBase';
import { Direction } from './enum';


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
    if (option.visualMap) option.visualMap.push(v);
  }

  public static chart_SetVisualMap_Min(option: OptionBase, max: number, min: number, colorlist: string[]) {
    let v = new VisualMap();
    v.max = max;
    v.min = min;
    v.inRange.color = colorlist;
    v.calculable = true;
    if (option.visualMap) option.visualMap.push(v);
  }

  public static chart_SetDataZoom(option: OptionBase, start: number, end: number, direct: Direction) {
    let z = new DataZoom();
    if (direct === Direction.Horizontal) {
      z.xAxisIndex = [0];
    } else {
      z.yAxisIndex = [0];
    }

    z.start = start;
    z.end = end;
    if (!option.dataZoom) option.dataZoom = [];
    option.dataZoom.push(z);
  }

  /**背景色 */
  public static chart_SetBackGroundColor(option: any, color: any) {
    option["backgroundColor"] = color;
  }


  public static chart_SetBackGroundImage(option: OptionBase, url: string, repeat: boolean) {
    var img = new Image();
    img.src = url;
    if (repeat) {
      option.backgroundColor = { 'image': img, type: "pattern", repeat: "repeat" };
    } else {
      option.backgroundColor = { 'image': img, type: "pattern", repeat: "no-repeat" };
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
    if (saveAsImage) Object.assign(toolbox.feature, { saveAsImage: {} })
    if (restore) Object.assign(toolbox.feature, { restore: {} })
    if (dataView) Object.assign(toolbox.feature, { dataView: {} })
    if (dataZoom) Object.assign(toolbox.feature, { dataZoom: {} })
    if (magicType) Object.assign(toolbox.feature, { magicType: { type: ['line', 'bar', 'stack', 'tiled'] } })
    if (brush) Object.assign(toolbox.feature, { brush: {} })
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
    if (height) Object.assign(i, { height: height });
    if (width) Object.assign(i, { width: width });
    return i;
  }

  /**
   * 
   * @param url 地址
   * @param grid 位置大小信息
   * @param origin 旋转和缩放的中心点
   */
  public static chart_CreateGraphic_Image(url: string, grid: Grid, origin: number[]) {
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
    if (origin) Object.assign(origin, { origin: origin });
    if (grid.height) Object.assign(graphic.style, { height: grid.height });
    if (grid.width) Object.assign(graphic.style, { width: grid.width });
    if (grid.top) Object.assign(graphic.style, { top: grid.top });
    if (grid.bottom) Object.assign(graphic.style, { bottom: grid.bottom });
    if (grid.left) Object.assign(graphic.style, { left: grid.left });
    if (grid.right) Object.assign(graphic.style, { right: grid.right });
    return graphic;
  }

  public static chart_CreateGraphic_group(children: any[], totation: number, grid: Grid) {
    let graphic = {
      type: 'group',
      rotation: totation,
      bounding: 'raw',
      z: 100,
      children: children,
      cursor: 'default'  //默认为pointer
    }

    if (grid.height) Object.assign(graphic, { height: grid.height });
    if (grid.width) Object.assign(graphic, { width: grid.width });
    if (grid.top) Object.assign(graphic, { top: grid.top });
    if (grid.bottom) Object.assign(graphic, { bottom: grid.bottom });
    if (grid.left) Object.assign(graphic, { left: grid.left });
    if (grid.right) Object.assign(graphic, { right: grid.right });
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