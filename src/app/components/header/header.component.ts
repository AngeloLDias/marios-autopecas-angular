import { Component, OnInit } from '@angular/core';

import { LANG } from '../../theme/pt'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public lang  = LANG

  constructor() { }

  ngOnInit() {
  }

}
