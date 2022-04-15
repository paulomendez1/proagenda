import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { SecurityService } from './security/security.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(private nav : NavController, 
              private menu: MenuController,
              private securityService : SecurityService,
              private router : Router) {}
  name = localStorage.getItem('name');

  goHome(){
    this.nav.navigateForward('/miperfil');
    this.menu.close();
  }

  goSpecialties(){
    this.nav.navigateForward('/especialidades');
    this.menu.close();
  }

  logout(){
    this.securityService.logout();
    this.menu.close();
    this.router.navigate(['/login'])
  }

  openMenu(){
    this.menu.open();
  }
}
