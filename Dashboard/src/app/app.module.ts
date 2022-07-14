import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { UserService } from './services/user.service';
import { BrowserModule } from '@angular/platform-browser';


import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { HttpClientModule } from '@angular/common/http';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';


import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { EmployeeComponent } from './pages/gestion/employee/employee.component';
import { AddEmpComponent } from './pages/gestion/employee/add-emp/add-emp.component';
import { DepartementComponent } from './pages/gestion/department/department.component';
import { AddDepComponent } from './pages/gestion/department/add-dep/add-dep.component';

import { AdminComponent } from './pages/admin/admin.component';
import { PortesComponent } from './pages/portes/portes.component';

import { PresenceComponent } from './pages/gestion/employee/Fiche/presence/presence.component';
import { AbsenceComponent } from './pages/gestion/employee/Fiche/absence/absence.component';

import { FicheComponent } from './pages/gestion/employee/Fiche/fiche.component';
import { GestionComponent } from './pages/gestion/gestion.component';


import { AddPorteComponent } from './pages/portes/add-porte/add-porte.component';
import { ShowDepComponent } from './pages/gestion/department/show-dep/show-dep.component';
import { ShowEmpComponent } from './pages/gestion/employee/show-emp/show-emp.component';
import { ShowPorteComponent } from './pages/portes/show-porte/show-porte.component';
import { DeviceComponent } from './pages/device/device.component';
import { AddDeviceComponent } from './pages/device/add-device/add-device.component';
import { ShowDeviceComponent } from './pages/device/show-device/show-device.component';




@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    MDBBootstrapModule.forRoot(),
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    AdminComponent,
    PortesComponent,
    EmployeeComponent,
    DepartementComponent,
    AddEmpComponent,
    AddDepComponent,
    PresenceComponent,
    AbsenceComponent,
    FicheComponent,
    GestionComponent,
    AddPorteComponent,
    ShowDepComponent,
    ShowEmpComponent,
    ShowPorteComponent,
    DeviceComponent,
    AddDeviceComponent,
    ShowDeviceComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ErrorPageComponent,
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
