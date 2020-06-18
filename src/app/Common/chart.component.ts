import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'chart',
    templateUrl: './chart.component.html',
})
export class ChartComponent {
    @Input() title = '图表名称';
    @Input() boxstyle = { 'width': '350px', 'height': '350px' };
    @Input() chartstyle = { 'width': '330px', 'height': '280px' };
    @Input() footer = "";
    @Input() options = null;
    @Output() ChartInit = new EventEmitter();
    @Input() miniMode = false;
    public ChartInited(e: any) {
        this.ChartInit.emit(e);
    }
} 
