import { Component, OnInit, Input } from '@angular/core';
import { Produto } from '../../model/pruducts';
// import { Pacientes } from '../../model/pruducts';
import { ProductsService } from '../../services/products.service';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database'
import { Observable } from 'rxjs';
import { defineBase } from '@angular/core/src/render3';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})


export class ListProductsComponent implements OnInit {

  private produtosCollection: AngularFireList<Produto>
  public produtos: Observable<any[]>;
  public produtos2: Observable<any[]>;
  produtosRef: AngularFireList<any>;
  public showModal: boolean = false;
  public showModalAdd: boolean = false;

  constructor(private db: AngularFireDatabase) {

    this.produtosRef = db.list('/', ref => ref.orderByChild('/name').limitToFirst(10));

    this.produtos = this.produtosRef.snapshotChanges().pipe(
      map(change =>
        change.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
  }
  private handleError(error) {
    console.log(error);
  }

  updateCustomer(key: string, value: any): void {
    this.produtosRef.update(key, value).catch(error => this.handleError(error));
  }

  add2(key: string, change) {
    this.produtosRef.update(key, change);
    this.edit(Produto)
  }
  add(key, _produto: Produto, change): void {
    const list = this.db.list('/')

    if (_produto.key != null) {
      alert('editado com sucesso')
      console.log('1111', key)
      console.log('222', _produto)

      list.update(key, _produto);
    }
    else {
      alert('salvo com sucesso')
      list.push(_produto);
      console.log('1111', key)
      console.log('222', _produto)
    }
  }

  edit(produto): void {
    const list = this.db.list('/')
    this.produtosRef = Object(produto)
  }

  delete(key: string) {
    const list = this.db.list('/')
    list.remove(key);

  }

  toggleModal() {
    if (this.showModal == false) {
      this.showModal = true;
    }
    else {
      this.showModal = false
    }
  }
  toggleModalAdd() {
    if (this.showModalAdd == false) {
      this.showModalAdd = true;
    }
    else {
      this.showModalAdd = false
    }
  }

  ngOnInit() {

  }



}











