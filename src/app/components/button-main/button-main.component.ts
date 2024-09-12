import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-button-main',
  standalone: true,
  imports: [],
  templateUrl: './button-main.component.html',
  styleUrl: './button-main.component.scss'
})
export class ButtonMainComponent {

  @Input() buttonText: string = ""
  @Output() buttonClick = new EventEmitter<void>();

  onClick(): void {
    this.buttonClick.emit();
  }

}
