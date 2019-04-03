import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

  shouldShowDetails = false;
  event = 'Display';
  logs: Array<string> = [];

  constructor() { }

  ngOnInit() {
  }

  onAddLog() {
    this.shouldShowDetails = !this.shouldShowDetails;
    this.event = this.shouldShowDetails ? 'Hide' : 'Display';
    this.logs.push(new Date().toString());
  }
}
