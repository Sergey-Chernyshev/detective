import {Component, Input} from '@angular/core';
import {ButtonMainComponent} from "../button-main/button-main.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-services-main',
  standalone: true,
  imports: [
    ButtonMainComponent,
    RouterLink
  ],
  templateUrl: './services-main.component.html',
  styleUrl: './services-main.component.scss'
})
export class ServicesMainComponent {
  @Input() serviceType: string = "";
  @Input() linkText: string = "";
  @Input() linkUrl: string = "";

}
