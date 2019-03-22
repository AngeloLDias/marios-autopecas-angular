import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }
  title: string = 'My first AGM project';
  lat: number = -22.9871293;
  lng: number = -43.6514069;
  ngOnInit() {
  }

}
