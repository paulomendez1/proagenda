import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Doctor } from './doctor.model';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  url = environment.apiURL + '/specialty';

  constructor(private http: HttpClient) { }

  getDoctors(id: number): Observable<any> {
    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
    return this.http.get<Doctor[]>(`${this.url}/${id}/doctors`, { headers: headers, observe: "response" })
  }

  getDoctor(id : number): Observable<any>{
    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
    return this.http.get<Doctor>(`${environment.apiURL}/doctor/${id}`, { headers: headers, observe: "response" })
  }

  getWorkingHoursByDoctor(id : Number): Observable<any>{
    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
    return this.http.get<Doctor>(`${environment.apiURL}/doctor/${id}/workinghours`, { headers: headers, observe: "response" })
  }
}