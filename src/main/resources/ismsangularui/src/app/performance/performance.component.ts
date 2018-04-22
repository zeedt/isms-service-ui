import { Component, OnInit } from '@angular/core';
import {GlobalService} from "../global.service";

@Component({
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.css']
})
export class PerformanceComponent implements OnInit {

  constructor(private globalService:GlobalService) { }

  ngOnInit() {
    this.globalService.setPageTitle("Performance");
  }

}
