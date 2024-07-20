import { Component } from '@angular/core';
import {HeaderComponent} from "./header/header.component";
import {ServerStatusComponent} from "./dashboard/server-status/server-status.component";
import {TrafficComponent} from "./dashboard/traffic/traffic.component";
import {TicketsComponent} from "./dashboard/tickets/tickets.component";
import {DashoboardItemComponent} from "./dashboard/dashoboard-item/dashoboard-item.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    HeaderComponent,
    ServerStatusComponent,
    TrafficComponent,
    TicketsComponent,
    DashoboardItemComponent
  ]
})
export class AppComponent {



}
