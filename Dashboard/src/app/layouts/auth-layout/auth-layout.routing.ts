import { Routes } from '@angular/router';

import { LoginComponent } from '../../pages/compte/login/login.component';
import { RegisterComponent } from '../../pages/compte/register/register.component';

export const AuthLayoutRoutes: Routes = [

    { path: 'login',          component: LoginComponent },
    { path: 'register',       component: RegisterComponent }
];
