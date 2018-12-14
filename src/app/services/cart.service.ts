import { Injectable } from '@angular/core';

import{ ProductsComponent } from '../container/products/products.component'

import { Cart } from '../model/cart'
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  pushArray() {
    const itemCarrinho = []
        return itemCarrinho;
    // console.log(itemCarrinho)
  }
  
}
