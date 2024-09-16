import {inject, Injectable} from '@angular/core';
import {catchError, Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";

interface Admin {
  id?: number;
  username: string;
}

interface Message {
  id?: number;
  phoneNumber: string;
  userName: string;
  userEmail?: string;
  userMessage?: string;
}

interface LoginResponse {
  token: string; // Adjust according to your response structure
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  readonly #apiUrl = 'https://gebodik.online/api'; // Замените на ваш реальный API URL

  #http = inject(HttpClient)

  // Вход администратора
  loginAdmin(username: string, password: string): Observable<LoginResponse> {
    return this.#http.post<LoginResponse>(`${this.#apiUrl}/admin/login`, { username, password }).pipe(
      catchError(this.#handleError<LoginResponse>('loginAdmin'))
    );
  }

  // Создать нового администратора
  createAdmin(newUsername: string, newPassword: string): Observable<Admin> {
    const body = { username: newUsername, password: newPassword };
    return this.#http.post<Admin>(`${this.#apiUrl}/admin/`, body).pipe(
      catchError(this.#handleError<Admin>('loginAdmin'))
    );
  }

  // Получить список администраторов
  getAdmins(): Observable<Admin[]> {
    return this.#http.get<Admin[]>(`${this.#apiUrl}/admins/`).pipe(
      catchError(this.#handleError<Admin[]>('loginAdmin'))
    );
  }

  // Удалить администратора
  deleteAdmin(id: number): Observable<void> {
    return this.#http.delete<void>(`${this.#apiUrl}/admins/${id}`).pipe(
      catchError(this.#handleError<void>('deleteAdmin'))
    );
  }

  sendMessage(data: Message){
    return this.#http.post<Message>(`${this.#apiUrl}/message/`, data).pipe(
      catchError(this.#handleError<Message>('sendMessage'))
    )
  }

  // Получить список сообщений пользователей
  getMessages(): Observable<Message[]> {
    return this.#http.get<Message[]>(`${this.#apiUrl}/messages/`).pipe(
      catchError(this.#handleError<Message[]>('sendMessage'))
    )
  }

  // Удалить сообщение пользователя
  deleteMessage(messageId: number): Observable<any> {
    return this.#http.delete(`${this.#apiUrl}/messages/${messageId}`);
  }


  // Error handling method
  #handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

}
