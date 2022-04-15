import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Specialty } from './specialty.model';

@Injectable({
  providedIn: 'root'
})
export class SpecialtyService {

  url = environment.apiURL + '/specialty';

  constructor(private http: HttpClient) { }

  getSpecialties(): Observable<any> {
    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
    return this.http.get<any>(this.url, { headers: headers, observe: "response" })
  }

  getSpecialty(id : number): Observable<any>{
    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
    return this.http.get<Specialty>(`${this.url}/${id}`, { headers: headers, observe: "response" })
  }
}