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
    // this.produtosRef = db.list('/', ref => ref.orderByChild('/name').limitToFirst(10));

    this.produtos = this.produtosRef.snapshotChanges().pipe(
      map(change =>
        change.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );

    // this.produtosRef = db.object('/');
    // this.produtosRef.snapshotChanges().subscribe(action => {
    //   console.log(action.type);
    //   console.log(action.key)
    //   console.log(action.payload.val())
    // });

    // console.log(this.produtos.pipe())
    //   var produtos = db.list('/');
   
    //   var produtos2 = this.produtos.subscribe(console.log)
    //  console.log("hehe",produtos2)
  }
  private handleError(error) {
    console.log(error);
  }
  
  updateCustomer(key: string, value: any): void {
    this.produtosRef.update(key, value).catch(error => this.handleError(error));
  }

add2(key: string, change){
  this.produtosRef.update(key, change);
  this.edit(Produto)
}
  add(key,_produto: Produto, change):void {
    const list = this.db.list('/')

    if(_produto.key != null){
      alert('editado com sucesso')
      console.log('1111', key)
      console.log('222', _produto)

      // this.produtosRef.set(_produto.key, change);
      list.update(key, _produto);
      // this.edit(Produto)
    }
    else{
      alert('salvo com sucesso')
      list.push(_produto);
      console.log('1111', key)
      console.log('222', _produto)
    }
      // if (_produto.id != 0) {

      //   alert('old product')
      // }
      // else {
      //   alert('new product')
      //   // const list = this.db.list('/')
      //   // list.push(_produto);
      //   // const item: Produto = { id, ..._produto };
      //   // this.produtosCollection.doc(id).set(item); 
      // }
  }
  // public produto2s: AngularFirestoreDocument<Produto>;

  edit(produto):void {

    // this.produtosRef.update(key,produto)
    // const list = this.db.list('/') x x 
    // this.produtosRef.update(key, { newname: newname });
     this.produtosRef = Object(produto)
      // console.log(this.produtosRef)
  }
  
  delete(key:string) {
    // this.produtosRef = Object(key)

    this.produtosRef.remove(key);
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











