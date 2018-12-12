import { Injectable } from '@angular/core';
import { cart } from '../model/cart'

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public itens: cart[] = []

  public exibirItens(): cart[] {
    return this.itens
  }
}

