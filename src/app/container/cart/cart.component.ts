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

  // aaa= 'aaaa'
  constructor(private productsService: ProductsService,
    private cartService: CartService
  ) { }

  ngOnInit() {  
    this.produtos = this.productsService.produtos

    
    console.log('aaa', this.cartService.displayItens())
  }


  // someMethod(index) {
  //   const myData = { produtos: this.produtos[index] };
  //   this.productsService.set('SOME_KEY', myData);
  //   // this.produtos.splice(index, 1);


  // }

  // someOtherMethod() {
  //   const myData = this.productsService.get('SOME_KEY');
  // }
}
// let dd = document.getElementById('nn');
// let aa = document.querySelector('.aa')
// console.log(dd);
// console.log(aa);
// console.log('hehe')

// this.produtos.forEach(value => {
//   console.log(value)
// });
