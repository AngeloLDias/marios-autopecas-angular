import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private router:Router,
    private afAuth: AngularFireAuth
    ){
  }

  ngOnInit() {

    if (this.afAuth.idToken == null){
      this.router.navigate(['#'])
    }
    const header = document.querySelector('app-header');
    const footer = document.querySelector('app-footer');
    if(window.location.href == 'http://localhost:4200/adm'){
      header.classList.add('d-none');
      footer.classList.add('d-none');
    }
  }
  title = 'marios-autopecas-angular';
  lat: number = -22.9871293;
  lng: number = -43.6514069;
}
