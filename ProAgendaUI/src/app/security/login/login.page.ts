import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { userCredentials } from '../security.model';
import { SecurityService } from '../security.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private nav: NavController,
              private fb: FormBuilder,
              private securityService: SecurityService,
              private router : Router) { }

  form: FormGroup;
  userCredentials: userCredentials;

  validation_messages = {
    'email': [
      { type: 'required', message: 'El email es obligatorio!' },
      { type: 'email', message: 'El formato del Email es incorrecto' }
    ],
    'password': [
      { type: 'required', message: 'La contraseña es obligatoria!' }
    ],
  }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', {validators: [Validators.required, Validators.email]}],
      password: ['', {validators: [Validators.required]}]
    })
  }

  submit(){
    this.userCredentials = {
      id: null,
      email: this.form.controls.email.value,
      password: this.form.controls.password.value,
      name: '',
      lastName: '',
      avatar: null
    };
    this.securityService.login(this.userCredentials).subscribe(authResponse => {
      this.securityService.saveToken(authResponse);
      this.router.navigate(['/miperfil']);
    })
  }

  goToSpecialties(){
    this.nav.navigateForward('/register');
}


}
