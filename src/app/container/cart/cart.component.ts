import { Component, ViewChild, OnInit } from '@angular/core';
import { Produto } from '../../model/pruducts'
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public produtos: Produto[];
  public qtdOptions = [];
  public cartEmpty: boolean = false;
  public productClicked: any;
  public cartArray: Produto[];


  constructor(
    private cartService: CartService) {
    this.produtos = this.cartService.cartArray;
  }

  ngOnInit() {
    this.itemCartEmtpy()
  }

  deleteProduct(_index) {
    this.cartService.deleteProduct(_index);
    this.itemCartEmtpy()
  }

  itemCartEmtpy() {
    if (this.cartService.cartArray.length == 0) {
      this.cartEmpty = true;
    }
    else {
      this.cartEmpty = false;
    }
  }

}
