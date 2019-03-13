import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  serverId: string;
  serverStatus: string;

  constructor() { }

  ngOnInit() {
  }

  onCreateServer() {
    console.log(`Go: serverId: ${this.serverId} and serverStatus: ${this.serverStatus}`);
  }
}
