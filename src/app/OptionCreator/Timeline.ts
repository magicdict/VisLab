import { OptionBase, Chart3D } from "./OptionBase"

export class TimelineOption {
    public baseOption?: OptionBase | Chart3D;
    public options?: any[];

    public static CreateTimeLine(BaseOption: OptionBase | Chart3D, TimeLineConfig: TimeLine) {
        let o = new TimelineOption();
        o.baseOption = BaseOption;
        Object.assign(o.baseOption, { timeline: TimeLineConfig })
        o.options = [];
        return o;
    }

}

export class TimeLine {
    public show: boolean = true;
    public autoPlay: boolean = true;
    public playInterval: number = 1000;
    public data: any[] = [];    //数字或者日期字符：'2002-01-01'，其他东西直接NaN
    public label: any;
}