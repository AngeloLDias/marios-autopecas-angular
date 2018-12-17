import { Component, ViewChild, OnInit } from '@angular/core';
import { Produtos } from '../../model/pruducts'
import { ProductsService } from '../../services/products.service'
import { CartService } from '../../services/cart.service';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public produtos: Produtos[];

  public qtdOptions = [];
  private productsArray = Produtos;

  public cartEmpty: boolean = false;

  //EventEmited
  public productClicked: any;
  private subscription: Subscription;

  public cartArray: Produtos[];


  constructor(
    private cartService: CartService
  ) { this.produtos = this.cartService.cartArray; }

  deleteProduct(_index) {
    this.cartService.deleteProduct(_index);
    this.itemCartEmtpy()
    console.log(this.cartEmpty)

  }
  ngOnInit() {
    this.itemCartEmtpy()

  }

  itemCartEmtpy() {
    console.log(this.cartService.cartArray)
    if (this.cartService.cartArray.length == 0) {
      this.cartEmpty = true;
    }
    else {
      this.cartEmpty = false;
    }
  }
}
