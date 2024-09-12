import { Component } from '@angular/core';
import {ButtonMainComponent} from "../button-main/button-main.component";

@Component({
  selector: 'app-more-questions',
  standalone: true,
  imports: [
    ButtonMainComponent
  ],
  templateUrl: './more-questions.component.html',
  styleUrl: './more-questions.component.scss'
})
export class MoreQuestionsComponent {

}
