import { Component } from '@angular/core';
import {NgClass, NgForOf} from "@angular/common";
import {LeafletModule} from "@asymmetrik/ngx-leaflet";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgForOf,
    LeafletModule,
    NgClass
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  menuItems = [
    {link: "", text: "Услуги"},
    {link: "", text: "Цены"},
    {link: "", text: "О нас"},
    {link: "", text: "Отзывы"},
    {link: "", text: "Контакты"},
  ]

  socialItems = [
    {link: "/", label: "телеграм", icon: "bi-telegram"},
    {link: "/", label: "телефон",  icon: "bi-telephone"},
    {link: "/", label: "вотсап",  icon: "bi-whatsapp"},
  ]
}
