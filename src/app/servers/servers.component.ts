import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  serverName: string;
  isServerCreated: boolean = false;
  servers: Array<string> = [ 'Server 1', 'Server 2' ];

  constructor() { }

  ngOnInit() {
  }

  onCreateServer() {
    this.isServerCreated = true;
    this.servers.push(this.serverName);
    console.log(`Go: serverName: ${this.serverName}`);
  }
}
