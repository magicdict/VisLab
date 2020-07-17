
export class GraphicGrid {
  public top?: string | number;
  public bottom?: string | number;
  public left?: string | number;
  public right?: string | number;
  public width?: string | number;
  public height?: string | number;
  public rotation?: string | number;
}
export class Graphic {
  /**
   * 
   * @param url 地址
   * @param grid 位置大小信息
   * @param origin 旋转和缩放的中心点
   */
  public static CreateGraphic_Image(url: string, grid: GraphicGrid, origin: number[]) {
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
    if (grid.top) Object.assign(graphic, { top: grid.top });
    if (grid.bottom) Object.assign(graphic, { bottom: grid.bottom });
    if (grid.left) Object.assign(graphic, { left: grid.left });
    if (grid.right) Object.assign(graphic, { right: grid.right });
    return graphic;
  }

  public static CreateGraphic_TextArea(
    grid: GraphicGrid,
    title: string, textColor: string, rectColor:string,font:string
  ) {
    let rect = this.CreateGraphic_rect(grid.width, grid.height, rectColor);
    let text = this.CreateGraphic_Text(title, textColor,font);
    grid.width = undefined;
    grid.height = undefined;
    let group = this.CreateGraphic_group([rect, text], grid);
    return group;
  }


  public static CreateGraphic_group(children: any[], grid: GraphicGrid) {
    let graphic = {
      type: 'group',
      bounding: 'raw',
      z: 100,
      children: children,
      cursor: 'default'  //默认为pointer
    }
    if (grid.rotation) Object.assign(graphic, { rotation: grid.rotation });
    if (grid.height) Object.assign(graphic, { height: grid.height });
    if (grid.width) Object.assign(graphic, { width: grid.width });
    if (grid.top) Object.assign(graphic, { top: grid.top });
    if (grid.bottom) Object.assign(graphic, { bottom: grid.bottom });
    if (grid.left) Object.assign(graphic, { left: grid.left });
    if (grid.right) Object.assign(graphic, { right: grid.right });
    return graphic;
  }

  public static CreateGraphic_rect(width: number | string, height: number | string, color: string) {
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


  public static CreateGraphic_Text(text: string, color: string, font: string) {
    let graphic = {
      type: 'text',
      left: 'center',
      top: 'center',
      z: 100,
      style: {
        fill: color,
        text: text,
        font: font
      },
      cursor: 'default'  //默认为pointer
    }
    return graphic;
  }
}