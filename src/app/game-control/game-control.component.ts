import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() sequenceEmiter = new EventEmitter();
  @Output() resetGame = new EventEmitter<void>();
  private sequence: number = 1;
  private interval;
  isGameRunning: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onStartGame() {
    this.isGameRunning = true;
    this.interval = setInterval(() => {
      this.sequenceEmiter.emit(this.sequence++);
    }, 1000);
  }

  onStopGame() {
    this.isGameRunning = false;
    clearInterval(this.interval);
  }

  onResetGame() {
    this.sequence = 1;
    this.onStopGame();
    this.resetGame.emit();
  }
}
