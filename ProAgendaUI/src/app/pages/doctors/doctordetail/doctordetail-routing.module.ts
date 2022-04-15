import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoctordetailPage } from './doctordetail.page';

const routes: Routes = [
  {
    path: '',
    component: DoctordetailPage,
    children: [
      {
        path: 'perfil',
        loadChildren: () => import('../doctordetail/doctorprofile/doctorprofile.module').then(m => m.DoctorprofilePageModule)
      },
      {
        path: 'turnos',
        loadChildren: () => import('../doctordetail/appointments/appointments.module').then(m => m.AppointmentsPageModule)
      },
      {
        path: '',
        redirectTo: 'perfil',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'doctorprofile',
    loadChildren: () => import('./doctorprofile/doctorprofile.module').then( m => m.DoctorprofilePageModule)
  },
  {
    path: 'appointments',
    loadChildren: () => import('./appointments/appointments.module').then( m => m.AppointmentsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctordetailPageRoutingModule {}
