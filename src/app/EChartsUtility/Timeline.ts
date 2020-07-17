import { OptionBase, Chart3D } from "./OptionBase"

export class TimelineUtility {
    public baseOption?: OptionBase | Chart3D;
    public options?: any[];

    public static CreateTimeLine(BaseOption: OptionBase | Chart3D, TimeLineConfig: TimeLineConfig) {
        let o = new TimelineUtility();
        o.baseOption = BaseOption;
        Object.assign(o.baseOption, { timeline: TimeLineConfig })
        o.options = [];
        return o;
    }

}

export class TimeLineConfig {
    public show: boolean = true;
    public autoPlay: boolean = true;
    public playInterval: number = 1000;
    public data: any[] = [];    //数字或者日期字符：'2002-01-01'，其他东西直接NaN
    public label: any;
}