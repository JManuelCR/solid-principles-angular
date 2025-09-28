import { Injectable } from '@angular/core';
import { UserReadable, UserWritable } from '../../domain/models/user.interface';

// User service just handle user data. Single Responsibility Principle
// Responsibility of reading and writing user data is separated. Interface Segregation Principle
@Injectable({
  providedIn: 'root'
})
export class UserService implements UserReadable, UserWritable {

  private users: string[] = [];

  addUser(user: string): void {
    this.users.push(user);
  }

  getUsers(): string[] {
    return this.users;
  }

  constructor() { }
}
