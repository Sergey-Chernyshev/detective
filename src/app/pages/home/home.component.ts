import {Component, inject, OnInit, SimpleChanges} from '@angular/core';
import {ButtonMainComponent} from "../../components/button-main/button-main.component";
import {PreviewBlockComponent} from "../../components/preview-block/preview-block.component";
import {ServicesPreviewComponent} from "../../components/services-preview/services-preview.component";
import {ServicesMainComponent} from "../../components/services-main/services-main.component";
import {HowWeWorkComponent} from "../../components/how-we-work/how-we-work.component";
import {WhyChooseUsComponent} from "../../components/why-choose-us/why-choose-us.component";
import { BlockTitleComponent} from "../../components/block-titile/block-title.component";
import {LicenseBlockComponent} from "../../components/license-block/license-block.component";
import {FormBlockComponent} from "../../components/form-block/form-block.component";
import {MoreQuestionsComponent} from "../../components/more-questions/more-questions.component";
import {DontDoComponent} from "../../components/dont-do/dont-do.component";
import {MapComponent} from "../../components/map/map.component";
import {ServiceDetail, ServicesDataInterface} from "../../models/json.interface";
import {InfoService} from "../../services/info.service";
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ButtonMainComponent,
    PreviewBlockComponent,
    ServicesPreviewComponent,
    ServicesMainComponent,
    HowWeWorkComponent,
    WhyChooseUsComponent,
    BlockTitleComponent,
    LicenseBlockComponent,
    FormBlockComponent,
    MoreQuestionsComponent,
    DontDoComponent,
    MapComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',

})
export class HomeComponent implements OnInit{
  allServices!: ServiceDetail[][];

  readonly #infoService = inject(InfoService);
  readonly #apiService = inject(ApiService);

  ngOnInit() {
    this.#apiService.getServices("services").subscribe(services => {
      this.allServices = [this.#sortServicesByIdI1(services), this.#sortServicesByIdI2(services)]
    })
  }

  #sortServicesByIdI2(services: ServicesDataInterface): ServiceDetail[] {
    const allSortedServices: ServiceDetail[] = [];

    services.services.individuals.categories.forEach(category => {
      const filteredServices = category.services.filter((service: ServiceDetail) => service.id !== undefined);
      const sortedServices = filteredServices.sort((a: ServiceDetail, b: ServiceDetail) => a.id! - b.id!);
      allSortedServices.push(...sortedServices);
    });

    return allSortedServices;
  }
  #sortServicesByIdI1(services: ServicesDataInterface): ServiceDetail[] {
    // Создаем массив для хранения отсортированных услуг
    const allSortedServices: ServiceDetail[] = [];

    // Обрабатываем услуги для юридических лиц
    services.services.legal_entities.categories.forEach(category => {
      const filteredServices = category.services.filter((service: ServiceDetail) => service.id !== undefined);
      const sortedServices = filteredServices.sort((a: ServiceDetail, b: ServiceDetail) => a.id! - b.id!);
      allSortedServices.push(...sortedServices);
    });

    return allSortedServices;
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data']) {
      // Обрабатываем обновление входных данных
      console.log('Data updated:');
    }
  }


}
