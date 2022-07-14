import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthLayoutRoutes } from './auth-layout.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LoginComponent } from '../../pages/compte/login/login.component';
import { RegisterComponent } from '../../pages/compte/register/register.component';
//import { CompteComponent } from 'src/app/pages/compte/compte.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AuthLayoutRoutes),
    FormsModule
    // NgbModule
  ],
  declarations: [
   // CompteComponent,
    LoginComponent,
    RegisterComponent
  ]
})
export class AuthLayoutModule { }
