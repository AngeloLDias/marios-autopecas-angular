import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private router:Router){
  }

  ngOnInit() {
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
