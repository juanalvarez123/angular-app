import {Component, OnInit} from '@angular/core';
import {Server} from "../shared/server.model";

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  servers = [{
    type: 'Dedicado',
    name: 'Server 1',
    content: 'Prod',
    status: 'offline'
  }];

  constructor() {
  }

  ngOnInit() {
  }

  onRemoveServer(id: number) {
    this.servers.splice(id, 1);
  }

  onServerAdded(serverData: Server) {
    this.servers.push({
      type: serverData.type,
      name: serverData.name,
      content: serverData.content,
      status: serverData.status
    })
  }
}
