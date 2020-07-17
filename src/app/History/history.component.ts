import { OnInit, Component } from '@angular/core';
import { Bar } from '../OptionCreator/Series/Bar';
import { OptionHelper } from '../OptionCreator/OptionHelper';


@Component({
    templateUrl: './history.component.html'
})
export class History_Component implements OnInit {
    Sample: Bar.BarOption;
    ngOnInit(): void {
        let category = ['夏', '商', "周", "秦", "汉", "三国", "两晋"];
        let value = [50, 100, 150, 70, 80, 120, 90];

        this.Sample = Bar.BarOption.CreatePictorialBar(category, value, true, 'image://assets/image/青铜器.png');
        this.Sample.series[0].label.show = false;
        //上层有MerginLeft或者MerginTo的时候，一定要将图表position改为relative！！
        this.Sample.tooltip = {
            show: true,
            position: 'inside',
            trigger: 'item',
        };
        OptionHelper.chart_SetAxisColor(this.Sample, "#FFFFFF");
        this.Sample.xAxis[0].axisLabel.interval = 0;
        this.Sample.xAxis[0].axisLabel.rotate = 45;
    }
}