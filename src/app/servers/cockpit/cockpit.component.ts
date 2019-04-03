import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Server } from '../../shared/server.model';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() serverCreated = new EventEmitter<Server>();

  constructor() {
  }

  ngOnInit() {
  }

  onCreateServer(serverType, serverName, serverContent) {
    this.serverCreated.emit(new Server(serverType.value, serverName.value, serverContent.value));
  }
}
