import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-button-main',
  standalone: true,
  imports: [],
  templateUrl: './button-main.component.html',
  styleUrl: './button-main.component.scss'
})
export class ButtonMainComponent {

  @Input() buttonText: string = ""
  @Input() toTargetLink: string = ""
  @Output() buttonClick = new EventEmitter<void>();

  readonly #router = inject(Router)

  onClick(): void {
    this.buttonClick.emit();

    if(this.toTargetLink){
      this.#router.navigate([''], {fragment: 'form'}).then(r => console.log(r));
    }
  }

}
