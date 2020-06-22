import { Component, OnInit } from '@angular/core';
import {PlatformLocation} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'VisLab';
  _path = "";
  constructor(private location: PlatformLocation,) { 
  }
  ngOnInit(): void {
    this._path =  this.location['location']['pathname'];
    console.log(this._path);
  }
  
}
