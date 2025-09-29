import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '', redirectTo: 'user_registration', pathMatch: 'full'
    },
    {
        path: 'user_registration', loadComponent: () => import('./shared/components/user/user.component').then(m => m.UserComponent)
    },
    {
        path: '**', loadComponent: () => import('./shared/components/not-found/not-found.component').then(m => m.NotFoundComponent)
    }
];
