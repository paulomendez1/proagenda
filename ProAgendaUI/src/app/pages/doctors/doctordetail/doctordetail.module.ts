import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoctordetailPageRoutingModule } from './doctordetail-routing.module';

import { DoctordetailPage } from './doctordetail.page';
import { DoctorprofilePageModule } from './doctorprofile/doctorprofile.module';
import { AppointmentsPageModule } from './appointments/appointments.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoctordetailPageRoutingModule,
    DoctorprofilePageModule,
    AppointmentsPageModule
  ],
  declarations: [DoctordetailPage]
})
export class DoctordetailPageModule {}
