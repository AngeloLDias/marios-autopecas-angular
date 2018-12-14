import { Injectable } from '@angular/core';

import{ ProductsComponent } from '../container/products/products.component'

import { Cart } from '../model/cart'

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public itens: Cart[] = []
  

  public displayItens(): Cart[] {
    return this.itens;
  }

  public includeItem(index): void {
    var updateString = JSON.stringify(index);
    // for (this.i = 0; this.i > 5; this.i++){
    //   // let taskID = "task-" + this.i;
    //   // localStorage.setItem('prod'+this.i, updateString)
    // }
    let i = Math.random()*10

    localStorage.setItem('prod'+ ProductsComponent.id(index), updateString)
    
    console.log('produdd', index)
    // localStorage.setItem('prod2', produtos.tipo)
    // localStorage.setItem('prod3', produtos.preco)
    // localStorage.setItem('prod4', produtos.marca)
    // let itense : Cart = new Cart()
    // let cart: Cart = new Cart()

    // this.itens.push(cart)
  }

    remove(index): void {
    // localStorage.removeItem(produtos)
    localStorage.removeItem(JSON.stringify('prod'+index))
  }
  //  getRandomIntInclusive(min, max) {
  //   min = Math.ceil(min);
  //   max = Math.floor(max);
  //   return Math.floor(Math.random() * (max - min + 1)) + min;
  // }
}
