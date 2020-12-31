import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  log_format: any;
  constructor() { 
    this.log_format = " { 'log_format' : '\[<Time>\] \[<Level>\] <Content>', 'regex' : [r'(\d+\.){3}\d+'], 'threshold' : 0.23} ";
  }

  ngOnInit() {
  }

}
