import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {
  

  constructor(private router: Router) { }

  ngOnInit() {
    this.goOn();
  }

  goOn = async() => {
    const delay = ms => new Promise(res => setTimeout(res, ms));
    await delay(2000);
    this.router.navigate(['/miperfil']);
  }

}
