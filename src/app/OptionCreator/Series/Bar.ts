import { OptionBase, Axis, Series } from '../OptionBase';

export namespace Bar {

    export interface BarRecord {
        name: string;
        value: number;
    }

    export class BarOption extends OptionBase {

        public static CreateBarByRecords(records: BarRecord[]) {
            let o = new BarOption();
            o.xAxis = [new Axis()];
            o.yAxis = [new Axis()];
            o.xAxis[0].data = records.map(x => x.name);
            o.series.push(this.CreateBarItem(records.map(x => x.value)));
            return o;
        }

        public static CreateBarItem(value: number[]) {
            let item = new Series();
            item.type = 'bar';
            item.data = value;
            return item;
        }

        public static CreateBar(category: string[], value: number[]): BarOption {
            let o = new BarOption();
            o.xAxis = [new Axis()];
            o.yAxis = [new Axis()];
            o.xAxis[0].data = category;
            o.series.push(this.CreateBarItem(value));
            return o;
        }

        public static CreatePictorialBarItem(value: number[], repeat: boolean, img?: string) {
            let item = new Series();
            item.type = 'pictorialBar';
            if (img) {
                item.symbol = img;
            } else {
                item.symbol = 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z';
            }
            Object.assign(item, { symbolRepeat: repeat });
            item.data = value;
            return item;
        }
        /**
         * 象形柱图
         * @param category 类别 
         * @param value 值
         * @param repeat 是否重复：真的时候类似于电池图
         * @param img 图像字符（url或者path）
         */
        public static CreatePictorialBar(category: string[], value: number[], repeat: boolean, img?: string): BarOption {
            let o = new BarOption();
            o.xAxis = [new Axis()];
            o.yAxis = [new Axis()];
            o.xAxis[0].data = category;
            o.series.push(this.CreatePictorialBarItem(value, repeat, img));
            return o;
        }
    }
}