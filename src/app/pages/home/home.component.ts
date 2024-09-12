import { Component } from '@angular/core';
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
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
