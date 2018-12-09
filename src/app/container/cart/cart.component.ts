import { Component, OnInit } from '@angular/core';
import { Produtos } from '../../model/pruducts'
import { ProductsService } from '../../services/products.service'
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
public produtos: Produtos[];    

  constructor(private productsService : ProductsService) { }

  ngOnInit() {
    this.productsService.getProdutos().subscribe(dados =>
      this.produtos = dados)
  }

}
