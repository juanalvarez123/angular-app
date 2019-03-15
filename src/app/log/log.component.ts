import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

  shouldShowDetails: boolean = false;
  event: string = 'Display';
  numbers: Array<number> = [];
  count: number = 0;

  constructor() { }

  ngOnInit() {
  }

  onAddLog() {
    this.shouldShowDetails = !this.shouldShowDetails;
    this.event = this.shouldShowDetails ? 'Hide' : 'Display';
    this.numbers.push(this.count++)
  }
}
