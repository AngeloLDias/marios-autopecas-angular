import { Component, OnInit,Input } from '@angular/core';
import { Produtos } from '../../model/pruducts';
// import { Pacientes } from '../../model/pruducts';
import { ProductsService } from '../../services/products.service'
@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})


export class ListProductsComponent implements OnInit {
    produtos: Produtos[];






  constructor(private productsService: ProductsService) {

  }

  ngOnInit() {
    // this.productsService.getProdutos().subscribe(dados =>
    //   this.produtos = dados
    // );  
  }


  // modal





  // local storage

}
















