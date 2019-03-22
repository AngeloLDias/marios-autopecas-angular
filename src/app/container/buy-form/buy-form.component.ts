import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-buy-form',
  templateUrl: './buy-form.component.html',
  styleUrls: ['./buy-form.component.scss']
})
export class BuyFormComponent implements OnInit {

  public produtos:any;

  constructor(
    private cartService: CartService,
    private orderSevice:OrderService
  ) { this.produtos = this.cartService.cartArray;}

  ngOnInit() {
  }

  add(_Order){
    this.orderSevice.add(_Order);
  }
  
  deleteProduct(_index) {
    this.cartService.deleteProduct(_index);
  };

}
