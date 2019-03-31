import { Component, OnInit } from '@angular/core';
import { LANG } from '../../theme/pt'

import { ProductsService } from '../../services/products.service';
import { CartService } from '../../services/cart.service';
import { MatDialog } from '@angular/material';
import { ModalCartComponent } from 'src/app/components/modals/modal-cart/modal-cart.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})


export class ProductsComponent implements OnInit {
  public lang = LANG;
  public produtos: any;
  public produtosRef: any;
  public showModal: boolean = false;
  public spinner: boolean = true;

  constructor(
    private cartService: CartService,
    private productsSevice: ProductsService,
    private dialog: MatDialog) {

  }

  ngOnInit() {
    this.productsSevice.getProducts(this.productsSevice.startAt)
    this.productsSevice.products.subscribe(res => {
      this.produtos = res;
      this.spinner = false;
    });
  }

  next() {
    this.productsSevice.next()
  }

  prev() {
    this.productsSevice.prev()
  }

  addToCart(produto) {
    this.cartService.addToCart(produto);
    this.produtosRef = produto
  };



  showdialogCart(produto) {
    this.dialog.open(ModalCartComponent)
    console.log(produto)
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
