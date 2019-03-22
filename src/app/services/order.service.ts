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
export class OrderService {

  public order: Observable<any[]>;
  public orderRef: AngularFireList<any>;

  constructor(private db: AngularFireDatabase) {
    this.orderRef = db.list('/Pedidos')

    this.order = this.orderRef.snapshotChanges().pipe(
      map(change =>
        change.map(c => ({
          key: c.payload,
          ...c.payload.val()
        }))
      )
    )
  }

  add(_Order: Produto) {
    const list = this.db.list('/Pedidos')
    list.push(_Order);
  }

  delete(key: string) {
    const list = this.db.list('/')
    list.remove(key);
  }
}
