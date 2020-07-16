export class LineStyle {
    color?: string;
    width?: string;
    type?: string;
    shadowBlur?:number;
    shadowColor?:string;
    shadowOffsetX?:number;
    shadowOffsetY?:number;
    opacity?:number;
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