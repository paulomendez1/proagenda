import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoctorprofilePageRoutingModule } from './doctorprofile-routing.module';

import { DoctorprofilePage } from './doctorprofile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoctorprofilePageRoutingModule
  ],
  declarations: [DoctorprofilePage]
})
export class DoctorprofilePageModule {}
