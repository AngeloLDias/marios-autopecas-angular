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


  public showModal: boolean = false;
  public showModalDontFound: boolean = false;



  constructor(private productsService: ProductsService) {

  }

  ngOnInit() {
    // this.productsService.getProdutos().subscribe(dados =>
    //   this.produtos = dados
    // );  
  }


  // modal


  openModal() {
    this.showModal = true;
  }

  toggleModal() {
    if (this.showModal == false) {
      this.showModal = true;
    }
    else {
      this.showModal = false;
    }
  }


  // local storage

}
















