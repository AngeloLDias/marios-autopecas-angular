import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }
  title: string = 'My first AGM project';
  lat: number = 51.678418;
  lng: number = 7.809007;
  ngOnInit() {
  }

}
