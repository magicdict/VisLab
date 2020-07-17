import { ECharts, EChartOption, VisualMap } from 'echarts';
import { OptionBase } from './OptionBase';
import { Direction } from './Enum';


export class OptionHelper {
  /**
   * 添加VisualMap
   * @param option 需要添加的图表配置 
   * @param max VisualMap最大值
   * @param colorlist inRange颜色列表
   */
  public static chart_SetVisualMap(option: OptionBase, max: number, colorlist: string[]) {
    this.chart_SetVisualMap_Min(option, max, 0, colorlist);
  }

  public static chart_SetVisualMap_Min(option: OptionBase, max: number, min: number, colorlist: string[]) {
    let v: VisualMap.Continuous = {};
    v.max = max;
    v.min = min;
    v.inRange = {}
    v.inRange.color = colorlist;
    v.calculable = true;
    if (option.visualMap) option.visualMap.push(v);
  }

  public static chart_SetDataZoom(option: OptionBase, start: number, end: number, direct: Direction) {
    let z: EChartOption.DataZoom = {};
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
  public static chart_SetBackGroundColor(option: OptionBase, color: any) {
    option.backgroundColor = color;
  }

  public static chart_SetAxisColor(option: OptionBase, color: string) {
    if (option.xAxis) {
      option.xAxis.forEach(
        x => {
          if (!x.axisLabel) x.axisLabel = {}
          if (!x.axisLine) x.axisLine = { lineStyle: {} }
          if (!x.splitLine) x.splitLine = { lineStyle: {} }
          x.axisLabel.color = color;
          x.axisLine.lineStyle.color = color;
          x.splitLine.lineStyle.color = color;
        }
      )
    }

    if (option.yAxis) {
      option.yAxis.forEach(
        x => {
          if (!x.axisLabel) x.axisLabel = {}
          if (!x.axisLine) x.axisLine = { lineStyle: {} }
          if (!x.splitLine) x.splitLine = { lineStyle: {} }
          x.axisLabel.color = color;
          x.axisLine.lineStyle.color = color;
          x.splitLine.lineStyle.color = color;
        }
      )
    }

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
  public static chart_SetToolBox(option: OptionBase, saveAsImage: boolean, restore: boolean,
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
    option.toolbox = toolbox;
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



}