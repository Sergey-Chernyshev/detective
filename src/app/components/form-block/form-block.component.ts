import {Component, inject, OnInit} from '@angular/core';
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
export class FormBlockComponent implements OnInit{
  contactForm!: FormGroup;
  error: string = ""

  #fb = new FormBuilder();
  #api = inject(ApiService)

  ngOnInit(): void {
    this.contactForm = this.#fb.group({
      phoneNumber: [null, [Validators.required]],
      userName: [null, [Validators.required]],
      userEmail: [null],
      userMessage: [null],
      policy: [false, [Validators.requiredTrue]],
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;
      console.log('Form Data:', formData);

      this.#api.sendMessage(formData).subscribe({
        next: (response) => {
          console.log('Message sent successfully', response);
          this.error = ""
        },
        error: (err) => {
          console.error('Failed to send message', err);
          this.error = "Ошибка запроса, попробуйте прозже"
        }
      });
    }
    else{
      this.error = "Проверьте все ли данные введены и принято соглашение"
    }
  }

  onButtonClick(): void {
    this.onSubmit();
  }

  changePolicy(event: Event){
    const checkbox = event.target as HTMLInputElement;
    const isChecked = checkbox.checked;
    this.contactForm.patchValue({
      policy: isChecked
    });
  }
}
