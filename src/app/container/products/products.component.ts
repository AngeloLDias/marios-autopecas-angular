import { Component, OnInit } from '@angular/core';
import { LANG } from '../../theme/pt'

import { ProductsService } from '../../services/products.service'
import { CartService } from '../../services/cart.service';

import { Produtos } from '../../model/pruducts';

import { CartComponent } from '../../container/cart/cart.component'
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
  // providers: [ ProductsService, CartService ]
})
export class ProductsComponent implements OnInit {
  public lang = LANG
  public produtos: Produtos[];


  // public storageName :string = "cart";
  // public cartArray = JSON.parse(localStorage.getItem(this.storageName));

  // public cartComponent:CartComponent

  constructor(private productsService: ProductsService,
    private cartService: CartService
    ) { }


  ngOnInit() {
    this.productsService.getProdutos().subscribe(dados =>
    this.produtos = dados)
  }

  public addItemCart(index) {
    const myData = { produtos: this.produtos[index]};
    this.productsService.set('produto'+index , myData);

    let prod =  this.cartService.pushArray()
    prod.push(myData.produtos)

    console.log(prod)

    // this.readItemCart(index)

    // this.cartService.pushArray2()
  }

  public readItemCart(index){
    const myData = this.productsService.get('produto'+index);



    // return myData;
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
