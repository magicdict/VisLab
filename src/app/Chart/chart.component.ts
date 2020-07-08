import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'chart',
    templateUrl: './chart.component.html',
})
export class ChartComponent {
    @Input() title = '图表名称';
    @Input() boxstyle = { 'width': '350px', 'height': '350px' };
    @Input() chartstyle = { 'width': '350px', 'height': '300px' };
    @Input() footer = "";
    @Input() options = null;
    @Output() ChartInit = new EventEmitter();
    @Input() miniMode = false;
    @Input() dark = false;
    public ChartInited(e: any) {
        //console.log("Run ChartInited At Component")
        this.ChartInit.emit(e);
    }

    public static boxstyle_mini = { 'width': '250px', 'height': '150px' };
    public static chartstyle_mini = { 'width': '240px', 'height': '140px' };

    public static boxstyle_Col3 = { 'width': '380px', 'height': '400px' };
    public static chartstyle_Col3 = { 'width': '340px', 'height': '350px' };

    public static boxstyle_Col4 = { 'width': '500px', 'height': '400px' };
    public static chartstyle_Col4 = { 'width': '450px', 'height': '350px' };

    public static boxstyle_Col4_Row2 = { 'width': '500px', 'height': '820px' };
    public static chartstyle_Col4_Row2 = { 'width': '450px', 'height': '770px' };


    public static boxstyle_Col6 = { 'width': '800px', 'height': '400px' };
    public static chartstyle_Col6 = { 'width': '750px', 'height': '350px' };
    public static boxstyle_Col6_Row2 = { 'width': '800px', 'height': '820px' };
    public static chartstyle_Col6_Row2 = { 'width': '750px', 'height': '770px' };

    public static boxstyle_Col8 = { 'width': '1000px', 'height': '400px' };
    public static chartstyle_Col8 = { 'width': '950px', 'height': '350px' };

    public static boxstyle_Col8_Row2 = { 'width': '1000px', 'height': '820px' };
    public static chartstyle_Col8_Row2 = { 'width': '950px', 'height': '770px' };

    public static boxstyle_Col9 = { 'width': '1220px', 'height': '400px' };
    public static chartstyle_Col9 = { 'width': '1170px', 'height': '350px' };

    public static boxstyle_Col12 = { 'width': '1600px', 'height': '400px' };
    public static chartstyle_Col12 = { 'width': '1550px', 'height': '350px' };

    public static boxstyle_Col12_Row2 = { 'width': '1600px', 'height': '820px' };
    public static chartstyle_Col12_Row2 = { 'width': '1550px', 'height': '770px' };

    public static boxstyle_Col12_Row3 = { 'width': '1600px', 'height': '1230px' };
    public static chartstyle_Col12_Row3 = { 'width': '1580px', 'height': '1160px' };

} 
