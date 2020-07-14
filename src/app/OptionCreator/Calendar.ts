import { OptionBase, Series, coordinateSystem_calendar } from './OptionBase';

export class CalendarConfig {
    public left?: any;
    public top?: any;
    public cellSize?: number[];
    public yearLabel?: any;
    public orient?: string;
    public dayLabel?: any;
    public monthLabel?: any;
    public range?: string | string[];
}

export class CalendarOption extends OptionBase {
    public static CreateCalendar(date: string[], value: number[], type: string) {
        let o = new CalendarOption();
        o.calendar = new CalendarConfig();
        o.calendar.left = 'center';
        o.calendar.top = 'middle';
        o.calendar.cellSize = [100, 100];
        o.calendar.yearLabel = { show: false };
        o.calendar.orient = 'vertical';
        o.calendar.dayLabel = { firstDay: 1, nameMap: 'cn' };
        o.calendar.monthLabel = { show: false };
        o.calendar.range = [];
        o.series = [];
        let s = new Series();
        s.coordinateSystem = coordinateSystem_calendar;
        s.type = type;
        let data = [];
        for (let index = 0; index < date.length; index++) {
            data.push([date[index], value[index]])
        }
        s.data = data;
        o.series.push(s);
        return o;
    }
}