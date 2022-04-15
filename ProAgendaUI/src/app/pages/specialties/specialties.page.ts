import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { LoadingController, NavController } from '@ionic/angular';
import { SpecialtyService } from 'src/app/pages/specialties/specialty.service';
import { Loading } from 'src/app/utilities/loading';

@Component({
  selector: 'app-specialties',
  templateUrl: './specialties.page.html',
  styleUrls: ['./specialties.page.scss'],
})
export class SpecialtiesPage {

  faChevronLeft = faChevronLeft;
  specialties: any;

  constructor(private router: Router, private specialtyService: SpecialtyService, private loading: Loading) { }

  async ionViewWillEnter() {
    this.loading.PresentLoading();
    this.specialtyService.getSpecialties().subscribe(data => {
      this.specialties = data.body;
    });
}


itemTrapped($event, specialty) {
  this.router.navigate(['/especialidades/' + specialty.id + '/doctores'])
}


}

