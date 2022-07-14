import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';

import { AdminComponent } from 'src/app/pages/admin/admin.component';
import { GestionComponent } from 'src/app/pages/gestion/gestion.component';
import { EmployeeComponent } from 'src/app/pages/gestion/employee/employee.component';
import { FicheComponent } from 'src/app/pages/gestion/employee/Fiche/fiche.component';
import { AbsenceComponent } from 'src/app/pages/gestion/employee/Fiche/absence/absence.component';
import { PresenceComponent } from 'src/app/pages/gestion/employee/Fiche/presence/presence.component';
import { DepartementComponent } from 'src/app/pages/gestion/department/department.component';
import { PortesComponent } from 'src/app/pages/portes/portes.component';
import { DeviceComponent } from 'src/app/pages/device/device.component';



export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',  component: DashboardComponent },
    
    { path: 'admin',   component:AdminComponent },

    { path: 'gestion',  component: GestionComponent },

    { path: 'department',      component: DepartementComponent },
    { path: 'employee',      component: EmployeeComponent },

    { path: 'fiche', component:FicheComponent  },

    { path: 'Presence', component:PresenceComponent  },
    { path: 'Absence',  component:AbsenceComponent},
 
    { path: 'portes',      component: PortesComponent},
    
    { path: 'device',      component: DeviceComponent},

];
