import { NumberSymbol } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Alert } from 'src/app/utilities/alert';
import { DoctorService } from '../../doctor.service';
import { Appointment } from './appointment.model';
import { AppointmentService } from './appointment.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.page.html',
  styleUrls: ['./appointments.page.scss'],
})
export class AppointmentsPage implements OnInit {

  constructor(public alertController: AlertController,
              private doctorService: DoctorService,
              private appointmentService : AppointmentService,
              alertClass : Alert) { }

  id : Number;
  startTime: Number;
  endTime : Number;
  date: Date;
  appointment : Appointment;

  ngOnInit() {
    this.id = Number(window.location.href.split('/')[4]);
    this.doctorService.getWorkingHoursByDoctor(this.id).subscribe(response=>{
      this.startTime = response.body[0].startHour;
      this.endTime =  response.body[0].endHour;
    })
  }

  async changeDate(event){
    var hour = Number(event.detail.value.split('T')[1].split(':')[0]);
    if(hour > this.endTime || hour < this.startTime){
     this.presentAlert(`Este doctor solo atiende desde las ${this.startTime}hs hasta las ${this.endTime}hs.`)
  }
  this.date=event.detail.value;
  }

  registerAppointment(){
    this.appointment = {
      doctorId : Number(window.location.href.split('/')[4]),
      time :  this.date,
      patientid : Number(localStorage.getItem('id'))
    };
    this.appointmentService.register(this.appointment).subscribe(response => {
      this.presentAlert('Su turno ha sido registrado')
    },error => this.presentAlert(error.error));
  }
  
  async presentAlert(message: string){
    const alert = this.alertController.create({
      header: 'Alerta',
      message: `${message}`,
      buttons: ['OK']
    });
    await (await alert).present();
  }

}

