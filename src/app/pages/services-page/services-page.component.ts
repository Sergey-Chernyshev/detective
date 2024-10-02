import {Component, inject, OnInit} from '@angular/core';
import {ApiService} from "../../services/api.service";
import {ActivatedRoute} from "@angular/router";
import {NgForOf} from "@angular/common";
import {WhyChooseUsComponent} from "../../components/why-choose-us/why-choose-us.component";
import {BlockTitleComponent} from "../../components/block-titile/block-title.component";

@Component({
  selector: 'app-services-page',
  standalone: true,
  imports: [
    NgForOf,
    WhyChooseUsComponent,
    BlockTitleComponent
  ],
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.scss'] // исправлено с 'styleUrl' на 'styleUrls'
})
export class ServicesPageComponent implements OnInit {
  #apiService = inject(ApiService);
  route = inject(ActivatedRoute);
  servicesData: any;
  type: string = 'individuals'; // Значение по умолчанию

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const type = params['type'];
      if (type) {
        this.type = type;
      }
    });

    this.#apiService.getServices("services").subscribe(services => {
      this.servicesData = services.services[this.type].categories; // получаем категории
      console.log(this.servicesData);
    });
  }
}
