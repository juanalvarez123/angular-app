import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.css']
})
export class TestFormComponent implements OnInit {

  username = '';

  constructor() { }

  ngOnInit() {
  }

  onEmptyUsername() {
    this.username = '';
  }
}
