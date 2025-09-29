import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { NOTIFIER_TOKEN } from './core/notifications/notifier.token';
import { NotificationService } from './core/services/notification/notification.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    {
      provide:NOTIFIER_TOKEN, useClass:NotificationService
    }
  ],
};
