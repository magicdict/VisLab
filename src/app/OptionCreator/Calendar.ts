import { OptionBase, Series, coordinateSystem_calendar } from './OptionBase';
export namespace Calendar {

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

        public static CreateCalendarConfig() {
            let calendar = new CalendarConfig();
            calendar.left = 'center';
            calendar.top = 'middle';
            calendar.cellSize = [100, 100];
            calendar.yearLabel = { show: false };
            calendar.orient = 'vertical';
            calendar.dayLabel = { firstDay: 1, nameMap: 'cn' };
            calendar.monthLabel = { show: false };
            calendar.range = [];
            return calendar;
        }

        public static CreateCalendar(date: string[], value: number[], type: string) {
            let o = new CalendarOption();
            o.calendar = this.CreateCalendarConfig();
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
}
