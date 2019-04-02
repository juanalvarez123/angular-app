import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Server } from '../../shared/server.model';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: [ './server-element.component.css' ],
  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit {

  @Input() element: Server;

  ngOnInit() {
  }

  getColor() {
    return this.element.status === 'online' ? 'green' : 'red';
  }
}
