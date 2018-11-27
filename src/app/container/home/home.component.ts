import { Component, OnInit } from '@angular/core';

import { LANG } from '../../theme/pt'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public lang  = LANG

  constructor() { }

  ngOnInit() {
  }

}
