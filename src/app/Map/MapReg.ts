import { registerMap } from 'echarts';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class MapRegService {
    IsChinaReg = false;
    IsZJReg = false;
    constructor(private http: HttpClient) {
        this.http.get('assets/map/data-china.json')
            .subscribe(geoJson => {
                registerMap('China', geoJson);
                this.IsChinaReg = true;
            });
        this.http.get('assets/map/data-zhejiang.json')
            .subscribe(geoJson => {
                registerMap('zhejiang', geoJson);
                this.IsZJReg = true;
            });
    }
}


