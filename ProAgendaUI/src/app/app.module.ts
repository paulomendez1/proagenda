import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MyProfilePage } from './pages/my-profile/my-profile';
import { DoctorsPage } from './pages/doctors/doctors.page';
import { SpecialtiesPage } from './pages/specialties/specialties.page';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Loading } from './utilities/loading';
import { ReactiveFormsModule } from '@angular/forms';
import { Alert } from './utilities/alert';

@NgModule({
  declarations: [
    AppComponent, 
    MyProfilePage,
    DoctorsPage,
    SpecialtiesPage,
  ],
  entryComponents: [
    MyProfilePage,
    DoctorsPage,
    SpecialtiesPage
  ],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    FontAwesomeModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [  
    Loading,
    Alert, 
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
