import { Component, OnInit } from '@angular/core';
import { LANG } from '../../theme/pt'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public lang = LANG

  constructor() { }

  ngOnInit() {
  }

}
