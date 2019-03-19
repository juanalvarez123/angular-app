import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Server} from "../../shared/server.model";

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() serverCreated = new EventEmitter<Server>();

  serverType: string;
  serverName: string;
  serverContent: string;

  constructor() {
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated.emit(new Server(this.serverType, this.serverName, this.serverContent));
  }
}
