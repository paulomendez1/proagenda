import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { toBase64 } from 'src/app/utilities/ToBase64';
import { userCredentials } from '../security.model';
import { SecurityService } from '../security.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private router: Router,
              private fb: FormBuilder,
              private securityService: SecurityService) { }

  form: FormGroup;
  userCredentials : userCredentials;
  imageBase64!: string;
  actualFile: File;

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
      password: ['', {validators: [Validators.required]}],
      name: ['', {validators: [Validators.required]}],
      lastname: ['', {validators: [Validators.required]}],
      avatar: ['', {validators: [Validators.required]}]
    })
  }

  goBack(){
    this.router.navigate(['/login'])
  }

  submit(){
    this.userCredentials = {
      id: null,
      email: this.form.controls.email.value,
      password: this.form.controls.password.value,
      name: this.form.controls.name.value,
      lastName: this.form.controls.lastName.value,
      avatar: this.actualFile
    };
    this.securityService.register(this.userCredentials).subscribe(authResponse => {
      this.securityService.saveToken(authResponse);
      alert('Ha sido registrado con exito!');
      this.router.navigate(['/']);
    })
  }
  change(event ){
    if (event.target.files.length > 0){
      const file: File = event.target.files[0];
      toBase64(file).then((value: string) => this.imageBase64 = value);
      this.actualFile = file;
    }
  }
}


