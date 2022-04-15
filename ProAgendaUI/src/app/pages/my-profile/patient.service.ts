import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Patient } from './patient.model';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  url = environment.apiURL + '/patient';

  constructor(private http: HttpClient) { }

  getPatient(id : number): Observable<any>{
    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
    return this.http.get<Patient>(`${environment.apiURL}/patient/${id}`, { headers: headers, observe: "response" })
  }
}
