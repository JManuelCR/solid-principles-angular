import { Component, Inject, inject } from '@angular/core';
import { UserService } from '../../../core/users/user.service';
import { Notifier } from '../../../domain/models/notifier.interface';
import { NgFor } from '@angular/common';
import { NOTIFIER_TOKEN } from '../../../core/notifications/notifier.token';

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
  // Using property injection and Angular's inject function. Dependency Inversion Principle DIP of SOLID principles
  private userService = inject(UserService);
  private notifier = inject<Notifier>(NOTIFIER_TOKEN);
  public users: string[] = [];
  constructor() {}

  registerUser(userName: string): void {
    this.userService.addUser(userName);
    this.users = this.userService.getUsers();
    this.notifier.notify(`User ${userName} was registered successfully!`);
  }
  trackByIndex(index: number, item: any): number {
    return index;
  }
}
