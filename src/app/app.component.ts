import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'marios-autopecas-angular';
  lat: number = -22.9871293;
  lng: number = -43.6514069;
}
