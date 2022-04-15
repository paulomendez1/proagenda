import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Appointment } from "./appointment.model";

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  url = environment.apiURL + '/appointment';

  constructor(private http: HttpClient) { }

  register(appointment: Appointment): Observable<any> {
    const formData = this.buildFormData(appointment);
    return this.http.post<any>(this.url + "/register", formData);
  }

  getAppointmentsByPatient(patientId: number): Observable<any> {
    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
    return this.http.get<any>(`${this.url}/${patientId}` , { headers: headers, observe: "response" })
  }

  private buildFormData(appointment: Appointment): FormData {
    const formData = new FormData();
    formData.append('doctorId', appointment.doctorId.toString());
    formData.append('patientid', appointment.patientid.toString());
    formData.append('time', appointment.time.toString());
    return formData;
  }
}