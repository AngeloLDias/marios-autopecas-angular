import { Injectable } from '@angular/core';
import { cart } from '../model/cart'
import { Produtos } from '../model/pruducts'
@Injectable({
  providedIn: 'root'
})
export class CartService {
  public itens: cart[] = []

  public displayItens(): cart[] {
    return this.itens
  }

  public includeItem(produtos: Produtos): void {
    console.log('dsfsdfdsf', produtos)
  }

}

