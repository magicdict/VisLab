import { OnInit, Component } from '@angular/core';
import { PieOption, } from '../OptionCreator/PieOption';
import { CommonFunction } from '../common'
import { ChartColor } from '../OptionCreator/ChartColor'
import { OptionHelper } from '../OptionCreator/OptionHelper';
@Component({
    templateUrl: './covid19.component.html'
})
export class Covid19_Component implements OnInit {
    title = '新冠肺炎2019';
    ngOnInit(): void {
        
   }
}