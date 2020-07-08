import { Chart2D, Series, coordinateSystem_polar, coordinateSystem_calendar } from './OptionBase';

export class calendarConfig {
    public left?: any;
    public top?: any;
    public cellSize?: number[];
    public yearLabel?: any;
    public orient?: string;
    public dayLabel?: any;
    public monthLabel?: any;
    public range?: string|string[];
}

export class CalendarOption extends Chart2D {
    public calendar: calendarConfig = {
        left: 'center',
        top: 'middle',
        cellSize: [100, 100],
        yearLabel: { show: false },
        orient: 'vertical',
        dayLabel: {
            firstDay: 1,
            nameMap: 'cn'
        },
        monthLabel: {
            show: false
        },
        range: []
    }

    public static CreateCalendar(date: string[], value: number[], type: string) {
        let o = new CalendarOption();
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