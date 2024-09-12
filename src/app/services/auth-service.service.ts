import { Injectable, inject } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';
import {catchError, map, Observable, of} from 'rxjs';

interface LoginResponse {
  token: string; // Adjust according to your response structure
}

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private cookieService = inject(CookieService);
  private http = inject(HttpClient);
  token: string | null = null;
  private readonly apiUrl = 'http://127.0.0.1:8000'; // Замените на ваш реальный API URL

  get isAuth(): boolean {
    if (!this.token) {
      this.token = this.cookieService.get('token');
    }
    return !!this.token;
  }

  login(payload: { username: string; password: string }): Observable<void> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/admin/login`, payload).pipe(
      map((res: LoginResponse) => {
        this.#saveTokens(res);
      }),
      catchError(this.#handleError<void>('login'))
    );
  }

  #saveTokens(res: LoginResponse): void {
    this.token = res.token;
    this.cookieService.set('token', this.token);
  }

  #handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
