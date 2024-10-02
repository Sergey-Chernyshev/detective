import {Component, inject, Input, OnInit} from '@angular/core';
import {ButtonMainComponent} from "../button-main/button-main.component";
import {RouterLink} from "@angular/router";
import {InfoService} from "../../services/info.service";
import {ServiceDetail, ServicesDataInterface} from "../../models/json.interface";
import {NgForOf, NgStyle} from "@angular/common";

@Component({
  selector: 'app-services-main',
  standalone: true,
  imports: [
    ButtonMainComponent,
    RouterLink,
    NgForOf,
    NgStyle
  ],
  templateUrl: './services-main.component.html',
  styleUrls: ['./services-main.component.scss'] // Исправлено на styleUrls
})
export class ServicesMainComponent {
  @Input() serviceType: string = "";
  @Input() linkText: string = "";
  @Input() linkUrl: string = "";
  @Input() data!: ServiceDetail[];


  ngOnInit() {
    console.log("компонент сделан")
  }
}
