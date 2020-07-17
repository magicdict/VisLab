/**
 * 方向枚举
 */
export enum Direction {
    Horizontal,
    Vertical
}

/**
 * markPoint枚举
 */
export enum MarkPointType {
    max = "max", min = "min", average = "average"
}

/**
 * markLine枚举
 */
export enum MarkLineType {
    max = "max", min = "min", average = "average", median = "median"
}

/**
 * AxisType
 */
export enum AxisType {
    value = "value", category = "category", time = "time", log = "log"
}

export enum SymbolType {
    circle = 'circle', rect = 'rect', roundRect = 'roundRect', triangle = 'triangle', diamond = 'diamond', pin = 'pin', arrow = 'arrow', none = 'none'
}