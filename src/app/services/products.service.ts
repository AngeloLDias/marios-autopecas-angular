import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment } from '../../environments/environment'
import { Produto } from '../model/pruducts';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database'
import { defineBase } from '@angular/core/src/render3';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private produtosCollection: AngularFireList<Produto>
  public produtos: Observable<any[]>;
  public products = new Subject<any[]>();
  public produtosRef: AngularFireList<any>;
  public notFoundCustomers: boolean;
  public nome: string = '';
  public startAt = 1;
  constructor(private db: AngularFireDatabase) {
    this.getProducts(this.startAt)
  }


  getProducts(startAt){
    this.produtosRef = this.db.list('/', ref => ref.orderByKey().startAt(startAt.toString()).limitToFirst(20));
    // this.produtosRef = db.list('/', ref => );

    this.produtos = this.produtosRef.snapshotChanges().pipe(
      map(change =>
        change.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
 
  this.produtos.subscribe( res => this.products.next(res))
  }
  add(key, _produto) {
    const list = this.db.list('/')
    if (key != null) {
      alert('editado com sucesso')
      list.update(key, _produto);
    }
    else {
      alert('salvo com sucesso')
      list.push(_produto);
    }
  }

  next(){
    this.startAt+=20
    this.getProducts(this.startAt)
  } 

  prev(){
    this.startAt > 9 ? this.startAt-=20 : null
    this.getProducts(this.startAt)
  }

  edit(produto) {
    this.produtosRef = Object(produto)
    console.log(produto)
  }

  delete(key: string) {
    const list = this.db.list('/')
    list.remove(key);
  }

    // FILTER CLIENT
    filterItens() {
      setTimeout(() => {
        this.produtos = this.filterNomes(this.nome);
        var itemsList = document.querySelectorAll('.items-list')
        if (itemsList.length >= 0) {
          this.notFoundCustomers = true
        }
        if (itemsList.length != 0) {
          this.notFoundCustomers = false
  
        }
  
      }, 800);
    }
  
    filterNomes(nome) {
      this.produtos = this.produtos;
      return this.produtos.pipe(
        map((customers: Produto[]) =>
          customers.filter((item) => {
            return item.name.toLowerCase().includes(nome.toLowerCase());
          })
        )
      )
    }
}





