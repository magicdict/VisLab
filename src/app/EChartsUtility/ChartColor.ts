import { Direction } from './Enum';

export class ChartColor {
    //#region Color

    /**配色表 6种 百度 */
    public static colorlist_6_Baidu = ["#60acfc", "#32d3eb", "#5bc49f", "#feb64d", "#ff7c7c", "#9287e7"];

    /**配色表 7种 百度 */
    public static colorlist_7_Baidu = ["#60acfc", "#32d3eb", "#5bc49f", "#feb64d", "#ff7c7c", "#9287e7", "purple"];
    //#endregion

    public static colorlist_VisualMapinRange = ['blue', 'blue', 'green', 'yellow', 'red']

    public static colorlist_VisualMapinRange_More = ['#313695', '#4575b4', '#74add1', '#abd9e9',
                                                   '#e0f3f8', '#ffffbf', '#fee090', '#fdae61',
                                                   '#f46d43', '#d73027', '#a50026']

    //#region  基本组件单元

    /**渐变色 
    * @param direction - 方向
    * @param startcolor - 开始颜色
    * @param endcolor - 结束颜色
    * @returns 渐变色 
    */
    public static geLinearGradient(direction: Direction, startcolor: string = '#c86589', endcolor: string = '#06a7ff'): any {
        let _startcolor = '#c86589';
        let _endcolor = '#06a7ff';
        let _x2 = 1;
        let _y2 = 0;
        if (direction === Direction.Vertical) {
            _x2 = 0;
            _y2 = 1;
        }
        if (startcolor) {
            _startcolor = startcolor;
        }
        if (endcolor) {
            _endcolor = endcolor;
        }
        return {
            type: 'linear',
            x: 0,
            y: 0,
            x2: _x2,
            y2: _y2,
            colorStops: [{
                offset: 0,
                color: _startcolor // 0% 处的颜色
            }, {
                offset: 1,
                color: _endcolor // 100% 处的颜色
            }],
            globalCoord: false // 缺省为 false
        }
    }

    //#endregion

} 