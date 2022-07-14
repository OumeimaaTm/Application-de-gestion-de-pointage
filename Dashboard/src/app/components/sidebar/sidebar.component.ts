import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Menu',  icon: 'ni-tv-2 text-primary', class: '' },

   // { path: '/register', title: 'Inscrire',  icon:'ni-key-25 text-info', class: '' },
   // { path: '/login', title: 'Connecter',  icon:'ni-single-02 text-green', class: '' },


    { path: '/gestion', title: 'Gestion',  icon:'ni-building text-pink', class: '' },

   // { path: '/department', title: 'gestion des departements',  icon:'ni-building text-pink', class: '' },
   // { path: '/employee', title: 'gestion des employees',  icon:'ni-badge text-blue', class: '' },

    { path: '/fiche', title: 'Consulter les fiches de pointages',  icon:'ni-collection text-black', class: '' },


   // { path: '/Presence', title: 'Fiche de présence',  icon:'ni-collection text-black', class: '' },
   // { path: '/Absence', title: 'Fiche d"absence',  icon:'ni-collection text-black', class: '' },

    { path: '/portes', title: 'Contrôle d"accés',  icon:'ni-lock-circle-open text-yellow', class: '' },
    { path: '/device', title: 'Gestion Devices',  icon:'fas fa-plug  text-blue', class: '' },

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }

  



}
