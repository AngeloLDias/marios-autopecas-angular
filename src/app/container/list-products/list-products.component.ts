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

  add(key, _produto: Produto): void {
    const list = this.db.list('/')
    if (key != null) {
      alert('editado com sucesso')
      list.update(key, _produto);
    }
    else {
      alert('salvo com sucesso')
      list.push(_produto);
      // console.log(this.produtosRef.key)
    }
  }

  edit(produto): void {
    this.produtosRef = Object(produto)
    console.log(produto)
  }

  delete(key: string) {
    const list = this.db.list('/')
    list.remove(key);

  }

  toggleModal() {
    this.showModal = !this.showModal;
  }

  toggleModalAdd() {
      this.showModalAdd = !this.showModalAdd
  }

  ngOnInit() {

  }
}











