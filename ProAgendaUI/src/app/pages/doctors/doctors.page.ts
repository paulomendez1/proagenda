import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { DoctorService } from 'src/app/pages/doctors/doctor.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.page.html',
  styleUrls: ['./doctors.page.scss'],
})
export class DoctorsPage {

  public doctors : any;
  id: number;

  constructor(private router: Router, private route: ActivatedRoute, private doctorService: DoctorService) { }

  ionViewWillEnter(){
    this.route.paramMap.subscribe(
      params => {
        this.id = Number(this.route.snapshot.paramMap.get('id'));
      }
    );


    this.doctorService.getDoctors(this.id).subscribe(data => {
      this.doctors=data.body,
      console.log(this.doctors)})
  }

  itemTrapped($event, doctor){
    this.router.navigate(['/doctor/'+doctor.id]);
  }

}