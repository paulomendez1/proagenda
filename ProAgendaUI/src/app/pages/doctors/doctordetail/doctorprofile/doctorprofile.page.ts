import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Doctor } from '../../doctor.model';
import { DoctorService } from '../../doctor.service';

@Component({
  selector: 'app-doctorprofile',
  templateUrl: './doctorprofile.page.html',
  styleUrls: ['./doctorprofile.page.scss'],
})
export class DoctorprofilePage implements OnInit {

  constructor(private doctorService: DoctorService,
              private route: ActivatedRoute) { }

  doctor: Doctor;
  id: number;

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        this.id = Number(window.location.href.split('/')[4]);
      }
    );
    this.doctorService.getDoctor(this.id).subscribe(response=>{
      this.doctor=response.body;
    });
  }

}
