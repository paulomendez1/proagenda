import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoctorprofilePage } from './doctorprofile.page';

const routes: Routes = [
  {
    path: '',
    component: DoctorprofilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctorprofilePageRoutingModule {}
