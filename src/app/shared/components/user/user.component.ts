import { Component, Inject, inject } from '@angular/core';
import { UserService } from '../../../core/users/user.service';
import { Notifier } from '../../../domain/models/notifier.interface';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    NgFor,
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  private userService = inject(UserService);
  public users: string[] = [];
  constructor(@Inject('Notifier') private notifier: Notifier) {}

  registerUser(userName: string): void {
    this.userService.addUser(userName);
    this.users = this.userService.getUsers();
    this.notifier.notify(`User ${userName} was registered successfully!`);
  }
  trackByIndex(index: number, item: any): number {
    return index;
  }
}
