import {Component, inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgForOf} from "@angular/common";
import {ApiService} from "../../services/api.service";

interface Admin {
  id: number;
  username: string;
}

interface Message {
  id: number;
  phoneNumber: string;
  userName: string;
  userEmail: string;
  userMessage: string;
  formattedDate: string;

}

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [FormsModule, NgForOf, ReactiveFormsModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent implements OnInit {
  createAdminForm!: FormGroup;
  admins: Admin[] = [];
  messages: Message[] = [];

  private fb = new FormBuilder();
  #api = inject(ApiService)

  ngOnInit(): void {

    this.createAdminForm = this.fb.group({
      newUsername: ['', [Validators.required]], newPassword: ['', [Validators.required]]
    });

    this.#getAdmins()
    this.#getMessages()
  }



  createAdmin() {
    if (this.createAdminForm.valid) {
      const {newUsername, newPassword} = this.createAdminForm.value;
      this.#api.createAdmin(newUsername, newPassword).subscribe(admin => {
        console.log('New admin created', admin);
        this.#getAdmins()
      });
    }
  }

  deleteAdmin(adminId: number) {
    console.log('Delete admin with ID', adminId);
    this.#api.deleteAdmin(adminId).subscribe(admin => {
      console.log('Delete admin with ID', adminId);
      this.#getAdmins()
    })
  }

  deleteMessage(messageId: number) {
    console.log('Delete message with ID', messageId);
    this.#api.deleteMessage(messageId).subscribe(data => {
      console.log('Delete message with ID', messageId);
      this.#getMessages()
    })
  }

  deleteAllMessages() {
    this.#api.deleteAllMessages().subscribe(data => {
      this.#getMessages()
    })
  }


  #getAdmins(): void {
    this.#api.getAdmins().subscribe({
      next: (admins: any) => {
        this.admins = admins;
        console.log(admins);
      },
      error: (err) => {
        console.error('Error fetching admins', err);
      }
    });
  }

  #getMessages(): void {
    this.#api.getMessages().subscribe({
      next: (messages: any) => {
        this.messages = messages;
        this.#formatDate()
        console.log(messages);
      },
      error: (err: any) => {
        console.error('Error fetching messages', err);
      }
    })
  }



  #formatDate(): void {
    this.messages = this.messages.map((elem: any) => {
      const date = new Date(elem.createdAt);
      return {
        ...elem,
        formattedDate: date.toLocaleString('ru-RU', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          // hour: '2-digit',
          // minute: '2-digit',
          // second: '2-digit'
        })
      };
    });
    console.log(this.messages);
  }

}
