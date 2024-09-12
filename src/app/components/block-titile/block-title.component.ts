import {Component, Input} from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-block-titile',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './block-title.component.html',
  styleUrl: './block-title.component.scss'
})
export class BlockTitleComponent {
  @Input() titleText: string = "";
  @Input() titleDescription: string | null = null;

}
