import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {InfoService} from "./services/info.service";
import {ApiService} from "./services/api.service";
import {ServicesDataInterface} from "./models/json.interface";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent{
  title = 'privateDetective';

}
