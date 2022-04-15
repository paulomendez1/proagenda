import { Component } from "@angular/core";
import { NavController, NavParams } from '@ionic/angular';
import { Doctor } from "../doctors/doctor.model";
import { DoctorService } from "../doctors/doctor.service";
import { Appointment } from "../doctors/doctordetail/appointments/appointment.model";
import { AppointmentService } from "../doctors/doctordetail/appointments/appointment.service";
import { SpecialtiesPage } from "../specialties/specialties.page";
import { Specialty } from "../specialties/specialty.model";
import { SpecialtyService } from "../specialties/specialty.service";
import { Patient } from "./patient.model";
import { PatientService } from "./patient.service";

@Component({
    selector: 'page-my-profile',
    templateUrl: './my-profile.html'
})
export class MyProfilePage {

    constructor(private nav: NavController,
        private appointmentService: AppointmentService,
        private doctorService: DoctorService,
        private patientService: PatientService,
        private specialtyService: SpecialtyService) { }

    profileName = localStorage.getItem('name');
    id: number;
    appointments: Appointment[];
    doctor: Doctor[] = [];
    patient: Patient;
    specialties: Specialty[] = [];



    async ionViewWillEnter() {
        this.id = Number(localStorage.getItem('id'));
        this.appointmentService.getAppointmentsByPatient(this.id).subscribe(data => {
            this.appointments = data.body;
            this.appointments.forEach(appointment => {
                this.doctorService.getDoctors(appointment.doctorId).subscribe(response => {
                    this.doctor.push(response.body[0])
                    this.specialtyService.getSpecialty(response.body[0].specialtyId).subscribe(response => {
                        this.specialties.push(response.body);
                    })
                    })
            })
        });
}


    goToSpecialties() {
        this.nav.navigateForward('/especialidades');
    }


    getDoctor(id: number) {
        var doctor = this.doctor.find(x=> x.id = id);
        return `${doctor.name} ${doctor.lastName} | ${this.getSpecialty(doctor.specialtyId)}` 
    }

    getSpecialty(id: number) {
        var speacialty = this.specialties.find(x=> x.id = id);
        return speacialty.name
    }




}