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


  //EventEmited
  public productClicked: any;
  private subscription: Subscription;

  public cartArray: Produtos[];


  constructor(
    private cartService: CartService
  ) {     this.produtos = this.cartService.cartArray;}

  deleteProduct(_index){
    this.cartService.deleteProduct(_index);
  }
  ngOnInit() {

  }

}
