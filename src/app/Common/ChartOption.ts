import { ECharts } from 'echarts';

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


export class ChartOption {
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

  public static series_SetBarItemStyle(option: any, colorlist: any) {
    option['itemStyle'] = //定义每个bar的颜色和其上是否显示值
    {
      normal: {
        color: function (params) {
          // build a color map as your need.
          //定义一个颜色集合
          var colorList = colorlist;
          //对每个bar显示一种颜色
          return colorList[params.dataIndex]
        },
        opacity: 0.5,
        borderType: 'dotted',
        label: {
          //每个bar的最高点值显示在bar顶部
          show: true,
          position: 'top',
          //值和x轴分类的显示格式(这里是换行显示)
          formatter: '{b}\n{c}'
        }
      },
      emphasis: {
        opacity: 1
      }
    }
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