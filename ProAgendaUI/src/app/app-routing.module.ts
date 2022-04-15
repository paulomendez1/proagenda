import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { faListUl } from '@fortawesome/free-solid-svg-icons';
import { IsLoggedInGuard } from './is-logged-in.guard';
import { DoctorsPage } from './pages/doctors/doctors.page';
import { MyProfilePage } from './pages/my-profile/my-profile';
import { SpecialtiesPage } from './pages/specialties/specialties.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'intro',
    pathMatch: 'full'
  },
  {
    path: 'miperfil',
    component: MyProfilePage,
    canActivate: [IsLoggedInGuard]
  },
  {
    path: 'especialidades',
    component: SpecialtiesPage,
    canActivate: [IsLoggedInGuard]
  },
  {
    path: 'especialidades/:id/doctores',
    component: DoctorsPage,
    canActivate: [IsLoggedInGuard]
  },
  {
    path: 'doctor/:id',
    loadChildren: () => import('./pages/doctors/doctordetail/doctordetail.module').then( m => m.DoctordetailPageModule),
    canActivate: [IsLoggedInGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./security/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'intro',
    loadChildren: () => import('./pages/intro/intro.module').then( m => m.IntroPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./security/register/register.module').then( m => m.RegisterPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
