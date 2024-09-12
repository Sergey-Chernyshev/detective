import {Component, inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {ApiService} from "../../services/api.service";
import {AuthServiceService} from "../../services/auth-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  readonly #fb = new FormBuilder();
  readonly #auth = inject(AuthServiceService)
  readonly #router = inject(Router);

  loginForm!: FormGroup;

  ngOnInit(): void {
    this.loginForm = this.#fb.group({
      username: ['', [Validators.required]], password: ['', [Validators.required]]
    });
  }

  loginAdmin(): void {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      console.log('Admin login', username, password);

      this.#auth.login({username, password}).subscribe({
        next: (response) => {
          console.log(response, "ok");
          this.#router.navigate(['/admin']);
        },
        error: (err) => {
          console.error('Login failed', err);
        }
      });
    }
  }

}
