import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { authenticationResponse, userCredentials } from './security.model';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  constructor(private http: HttpClient) { }

  url = environment.apiURL + '/account';
  private tokenKey: string = 'token';
  private expirationTokenKey : string = 'token-expiration'

  isLoggedIn() : boolean{
    const token= localStorage.getItem(this.tokenKey)

    if(!token){
      return false;
    }
    const expiration = localStorage.getItem(this.expirationTokenKey)
    const expirationDate = new Date(expiration);

    if(expirationDate <= new Date()){
      return false
    }
    return true;
  }

  getFieldFromJWT(field:string): string {
    const token = localStorage.getItem(this.tokenKey);
    if(!token){return ''}
    const dataToken= JSON.parse(atob(token.split('.')[1]));
    return dataToken[field]
  }

  logout(){
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.expirationTokenKey);
    localStorage.removeItem('name');
    localStorage.removeItem('lastName');
    localStorage.removeItem('avatar');
  }

  register(userCredentials: userCredentials) : Observable<authenticationResponse>{
    const formData = this.buildFormData(userCredentials);
    return this.http.post<authenticationResponse>(this.url + "/register", formData);
  }

  login(userCredentials: userCredentials) : Observable<authenticationResponse>{
    const formData = this.buildFormData(userCredentials);
    return this.http.post<authenticationResponse>(this.url + "/login", formData);
  }
  
  saveToken(authenticationResponse: authenticationResponse){
    localStorage.setItem(this.tokenKey, authenticationResponse.token);
    localStorage.setItem(this.expirationTokenKey, authenticationResponse.expiration.toString())
    this.getUserInfo(this.getFieldFromJWT('email')).subscribe(response =>{
      localStorage.setItem('name', response.name);
      localStorage.setItem('lastName', response.lastName);
      localStorage.setItem('avatar', response.avatar.name)
      localStorage.setItem('id', response.id.toString())
    });
  }

  getUserInfo(email : string) : Observable<userCredentials>{
    return this.http.get<userCredentials>(`${this.url}/${email}`);
  }

  private buildFormData(userCredentials: userCredentials) : FormData {
    const formData = new FormData();
    formData.append('email', userCredentials.email);
    formData.append('password', userCredentials.password);
    if(userCredentials.name){
      formData.append('name', userCredentials.name);
    }
    if(userCredentials.lastName){
      formData.append('lastname', userCredentials.lastName);
    }
    if(userCredentials.avatar){
      formData.append('avatar', userCredentials.avatar);
    }
    return formData;
  }
}
