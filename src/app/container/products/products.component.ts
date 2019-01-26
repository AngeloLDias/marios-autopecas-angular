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

import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database'
import { Observable } from 'rxjs';
import { defineBase } from '@angular/core/src/render3';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
  // providers: [ ProductsService, CartService ]
})
export class ProductsComponent implements OnInit {
  public lang = LANG
  // public produtos: Produto[];
  public showModal: boolean = false;
  private produtosCollection: AngularFireList<Produto>
  public produtos: Observable<any[]>;
  public produtos2: Observable<any[]>;
  produtosRef: AngularFireList<any>;

  constructor(
    private cartService: CartService,
    private db: AngularFireDatabase) { 
      this.produtosRef = db.list('/', ref => ref.orderByChild('/name').limitToFirst(10));

      this.produtos = this.produtosRef.snapshotChanges().pipe(
        map(change =>
          change.map(c => ({ key: c.payload.key, ...c.payload.val() }))
        )
      );
    }

  addToCart(produto) {
    this.cartService.addToCart(produto);
  }



  ngOnInit() {

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
