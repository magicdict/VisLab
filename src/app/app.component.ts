import { Component, OnInit } from '@angular/core';
import {PlatformLocation} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit  {
  title = 'VisLab';
  _path = "";
  constructor(private location: PlatformLocation,) { 
  }
  ngOnInit(): void {
    this._path =  this.location['location']['pathname'];
    if (this._path === "/") this._path = "/basic/bar"
    console.log(this._path);
  }
  
}
