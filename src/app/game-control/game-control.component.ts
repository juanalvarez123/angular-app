import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() sequenceEmiter = new EventEmitter();
  private sequence: number = 0;
  private interval;
  disableStartButton: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  startGame() {
    this.disableStartButton = true;
    this.interval = setInterval(() => {
      this.sequenceEmiter.emit(this.sequence++);
    }, 1000);
  }

  stopGame() {
    this.disableStartButton = false;
    clearInterval(this.interval);
  }

}
