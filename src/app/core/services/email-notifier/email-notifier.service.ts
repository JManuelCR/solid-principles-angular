import { Injectable } from '@angular/core';
import { Notifier } from '../../../domain/models/notifier.interface';

// implementation of Notifier for email notifications. Open/Close Principle
@Injectable({
  providedIn: 'root',
})
export class EmailNotifierService implements Notifier {
  notify(message: string): void {
    console.log(`Email notification sent: ${message}`);
  }
}
