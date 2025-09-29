import { Injectable } from '@angular/core';
import { Notifier } from '../../../domain/models/notifier.interface';
// Implementation of Notifier for SMS notifications. Open/Close Principle
// Implementation of SMS notifier service can change the email service without modifying its code. Liskov Substitution Principle
@Injectable({
  providedIn: 'root',
})
export class SmsNotifierService implements Notifier {
  notify(message: string): void {
    console.log(`SMS notification sent: ${message}`);
  }
}
