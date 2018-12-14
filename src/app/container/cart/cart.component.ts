import { Component, ViewChild, OnInit } from '@angular/core';
import { Produtos } from '../../model/pruducts'
import { ProductsService } from '../../services/products.service'
import  { CartService } from '../../services/cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public produtos: Produtos[];
  public number;
  public data:Produtos[]

  // pushArray():Produtos {
  //   const itemCarrinho = []
  //       return this.produtos;
  //   console.log(itemCarrinho)
  // }
  

  constructor(private productsService: ProductsService,
    private cartService: CartService
  ) { }
    
  ngOnInit() {  
    
    // this.productsService.getProdutos().subscribe(dados =>
    //   this.produtos = dados)
    for (let i = -1; i < 10; i++) {
      console.log(i);
      this.data =  JSON.parse(localStorage.getItem('produto'+i))
      // document.getElementById("nome").innerHTML += this.data

    console.log(this.data)

  }
    // let aa = ;
  }
  // createOptions() {
  //   for (let i = 1; i < 100; i++) {
  //     console.log(i);
  //   }
  // }
  
}
