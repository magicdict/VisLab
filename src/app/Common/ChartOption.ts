export class ChartOption {
  /**背景色 */
  public static SetBackGroundColor(option: any, color: any) {
    option["backgroundColor"] = color;
  }

  /**工具箱 */
  public static SetToolBox(option: any, saveAsImage: boolean, restore: boolean, 
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

  /**AreaStyle:series */
  public static SetNormalAreaColor(option: any, color: any) {
    option['areaStyle'] =
    {
      normal: {
        color: color
      }
    };
  }

}