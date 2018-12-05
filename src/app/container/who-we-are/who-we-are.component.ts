import { Component, OnInit } from '@angular/core';
import { LANG } from '../../theme/pt'

@Component({
  selector: 'app-who-we-are',
  templateUrl: './who-we-are.component.html',
  styleUrls: ['./who-we-are.component.scss']
})
export class WhoWeAreComponent implements OnInit {
  public lang = LANG

  constructor() { }

  ngOnInit() {
  }

}
