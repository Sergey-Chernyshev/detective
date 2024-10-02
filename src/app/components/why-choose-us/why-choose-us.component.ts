import {Component, inject, OnInit} from '@angular/core';
import {ApiService} from "../../services/api.service";
import {WhyWeItem} from "../../models/json.interface";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-why-choose-us',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './why-choose-us.component.html',
  styleUrl: './why-choose-us.component.scss'
})
export class WhyChooseUsComponent implements OnInit{
  #apiService = inject(ApiService);
  infoData: WhyWeItem = {
    data: [{
      title: "",
      description: "",
    }]
  };

  ngOnInit() {
    this.#apiService.getServices("why-we").subscribe((services: any) => {
      this.infoData = services;
      console.log(this.infoData);
    })
  }
}
