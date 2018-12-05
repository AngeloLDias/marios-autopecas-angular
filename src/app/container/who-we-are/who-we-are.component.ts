import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { LANG } from '../../theme/pt';
=======
import { LANG } from '../../theme/pt'

>>>>>>> master
@Component({
  selector: 'app-who-we-are',
  templateUrl: './who-we-are.component.html',
  styleUrls: ['./who-we-are.component.scss']
})
export class WhoWeAreComponent implements OnInit {
  public lang = LANG

  public lang = LANG;

  constructor() { }

  ngOnInit() {
  }

}
