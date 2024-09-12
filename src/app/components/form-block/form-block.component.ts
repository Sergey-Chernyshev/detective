import {Component, inject} from '@angular/core';
import {ButtonMainComponent} from "../button-main/button-main.component";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'app-form-block',
  standalone: true,
  imports: [
    ButtonMainComponent,
    ReactiveFormsModule
  ],
  templateUrl: './form-block.component.html',
  styleUrl: './form-block.component.scss'
})
export class FormBlockComponent {
  contactForm!: FormGroup;

  #fb = new FormBuilder();
  #api = inject(ApiService)

  ngOnInit(): void {
    this.contactForm = this.#fb.group({
      phoneNumber: [null, [Validators.required]],
      userName: [null, [Validators.required]],
      userEmail: [null],
      userMessage: [null]
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;
      console.log('Form Data:', formData);

      this.#api.sendMessage(formData).subscribe({
        next: (response) => {
          console.log('Message sent successfully', response);
          // Дополнительная обработка, например, показать сообщение об успехе
        },
        error: (err) => {
          console.error('Failed to send message', err);
          // Дополнительная обработка ошибок
        }
      });
    }
  }

  onButtonClick(): void {
    this.onSubmit();
  }
}
