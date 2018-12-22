import { Component, OnInit } from '@angular/core';
import { LANG } from '../../theme/pt'

// serviços

import { ProductsService } from '../../services/products.service'
import { CartService } from '../../services/cart.service';
import { ModalService } from '../../services/modal.service';
// modelos

import { Produto } from '../../model/pruducts';

// components

import { CartComponent } from '../../container/cart/cart.component'
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
  // providers: [ ProductsService, CartService ]
})
export class ProductsComponent implements OnInit {
  public lang = LANG
  public produtos: Produto[];

  public showModal: boolean = false;

  // public showModal2 = this.modalService
  // public productsList: Array<any> = Produtos;

  constructor(private productsService: ProductsService,
    private cartService: CartService,
    // private modalService:ModalService
  ) { }

  addToCart(produto) {
    this.cartService.addToCart(produto);
    // console.log(this.produtos)
  }



  ngOnInit() {
    this.productsService.getProdutos().subscribe(dados =>
      this.produtos = dados)

  }

  // openModal() {
  //   this.showModal = true;
  // }
  // closeModal() {
  //   this.showModal = false;
  // }

  toggleModal() { 
    if (this.showModal == false) {
      this.showModal = true;
    }
    else {
      this.showModal = false
    }
  }

  public lists = [
    {
      'section': ' MARCAS',

      'marcas': [
        { 'marca': 'BARDAHL' },
        { 'marca': 'BOSCH' },
        { 'marca': 'COBREQ' },
        { 'marca': 'DIVERSOS' },
        { 'marca': 'DYNA' },
        { 'marca': 'FANIA' },
        { 'marca': 'FIAT' },
        { 'marca': 'FRAM' },
        { 'marca': 'IKS' },
        { 'marca': 'IMPORTADOS' },
        { 'marca': 'ISAPA' },
        { 'marca': 'LUK BRASIL' },
        { 'marca': 'MAGNETI MARELLI' },
        { 'marca': 'METAL SYSTEM' },
        { 'marca': 'MOURA' },
        { 'marca': 'BARDAHL' },
        { 'marca': 'BOSCH' },
        { 'marca': 'COBREQ' },
        { 'marca': 'DIVERSOS' },
        { 'marca': 'DYNA' },
        { 'marca': 'FANIA' },
        { 'marca': 'FIAT' },
        { 'marca': 'FRAM' },
        { 'marca': 'IKS' },
        { 'marca': 'IMPORTADOS' },
        { 'marca': 'ISAPA' },
        { 'marca': 'LUK BRASIL' },
        { 'marca': 'MAGNETI MARELLI' },
        { 'marca': 'METAL SYSTEM' },
        { 'marca': 'MOURA' },
        { 'marca': 'BARDAHL' },
        { 'marca': 'BOSCH' },
        { 'marca': 'COBREQ' },
        { 'marca': 'DIVERSOS' },
        { 'marca': 'DYNA' },
        { 'marca': 'FANIA' },
        { 'marca': 'FIAT' },
        { 'marca': 'FRAM' },
        { 'marca': 'IKS' },
        { 'marca': 'IMPORTADOS' },
        { 'marca': 'ISAPA' },
        { 'marca': 'LUK BRASIL' },
        { 'marca': 'MAGNETI MARELLI' },
        { 'marca': 'METAL SYSTEM' },
        { 'marca': 'MOURA' },
      ]
    },
  ];








}
