import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
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
  public produtosRef: AngularFireList<any>;

  constructor(private db: AngularFireDatabase) {
    
    this.produtosRef = db.list('/Produtos');

    this.produtos = this.produtosRef.snapshotChanges().pipe(
      map(change =>
        change.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
  }

  add(key, _produto: Produto) {
    const list = this.db.list('/Produtos')
    if (key != null) {
      alert('editado com sucesso')
      list.update(key, _produto);
    }
    else {
      alert('salvo com sucesso')
      list.push(_produto);
    }
  }

  edit(produto) {
    this.produtosRef = Object(produto)
    console.log(produto)
  }

  delete(key: string) {
    const list = this.db.list('/Produtos')
    list.remove(key);
  }
}





