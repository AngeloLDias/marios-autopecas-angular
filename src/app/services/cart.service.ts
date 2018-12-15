import { Injectable } from '@angular/core';

import { ProductsComponent } from '../container/products/products.component'

import { Cart } from '../model/cart'
import { Produtos } from '../model/pruducts';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  produtos: Produtos[];
  public qtdOptions = [];
  // private productsArray = produtos;
  public storageName :string = "cart";
  public cartArray = JSON.parse(localStorage.getItem(this.storageName));


  public pushArray(): Produtos[] {
    let aa = this.produtos 
    return aa;
    // console.log(itemCarrinho)
  }

  // public incluirItem(){
  //   let produtos:Produtos = new Produtos(
  //     produtos
  //   )
  // }

}
