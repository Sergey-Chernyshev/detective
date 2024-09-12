import { Component } from '@angular/core';
import {ButtonMainComponent} from "../button-main/button-main.component";

@Component({
  selector: 'app-preview-block',
  standalone: true,
    imports: [
        ButtonMainComponent
    ],
  templateUrl: './preview-block.component.html',
  styleUrl: './preview-block.component.scss'
})
export class PreviewBlockComponent {

}
