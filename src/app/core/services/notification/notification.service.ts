import { Injectable } from '@angular/core';
import { Notifier } from '../../../domain/models/notifier.interface';

// Notification service just handle user notifications. Single Responsibility Principle
// Basic implementation of Notifier interface. Open/Close Principle
@Injectable({
  providedIn: 'root',
})
export class NotificationService implements Notifier {
  notify(message: string) {
    console.log(`Notification: ${message}`);
  }
}
