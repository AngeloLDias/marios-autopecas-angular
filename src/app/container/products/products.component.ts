import { Component, OnInit } from '@angular/core';
import { LANG } from '../../theme/pt'

import { ProductsService } from '../../services/products.service'
import { CartService } from '../../services/cart.service';

import { Produtos } from '../../model/pruducts';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
  // providers: [ ProductsService, CartService ]
})
export class ProductsComponent implements OnInit {
  public lang = LANG
  public produtos: Produtos[];

  constructor(private productsService: ProductsService,
    private cartService: CartService
  ) { }


  ngOnInit() {
    this.productsService.getProdutos().subscribe(dados =>
    this.produtos = dados)
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
