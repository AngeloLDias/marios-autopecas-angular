import { Component, OnInit, Input } from '@angular/core';
import { Produto } from '../../model/pruducts';
// import { Pacientes } from '../../model/pruducts';
import { ProductsService } from '../../services/products.service';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import {AngularFireDatabase, AngularFireList } from '@angular/fire/database'
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

  // public produto: Produto = new Produto()




  // public books: Observable<any[]>;
  // public  uid
  // private booksCollection: AngularFirestoreCollection<Book>;
  // private produtosCollection: AngularFirestoreCollection<Produtos>;

  constructor(private db: AngularFireDatabase ) {
    // this.produtosCollection = db.list<any>('/teste333-1c9f0');
    // this.produtos = this.produtosCollection.snapshotChanges().pipe(
    //   map(item => item.map(console.log))
    // )
    this.produtos = db.list('/').valueChanges();
    this.produtos.subscribe(console.log)
   console.log("hehe",this.produtos)
  }

  // fadsd.array.forEach(element => {
    
  // });
  // getAll() {
  //   // Buscando todos os itens no no "/task"
  //   this.produtos = this.db.database.list('');
  //   return this.items;
  // }
  add(_produto: Produto) {
    // const id = this.db.createId()
    //   const item: Produto = { id, ..._produto };
    //   this.produtosCollection.doc(id).set(item); 
    // if(this.produto.id != null){
    //   this.edit(_produto)
    //   alert('!null')
    // }
    // else{
    //   const item: Produto = { id, ..._produto };
    //   this.produtosCollection.doc(id).set(item); 
    // } 
  }
  // public produto2s: AngularFirestoreDocument<Produto>;

  edit(produto){
    // this.produto = Object.assign({},produto)

    // let produto2 = this.produtosCollection.doc<Produto>(`produtos/${this.produto.id}`); 

    //   produto2.update(produto);

    // console.log('AA', this.produto.id)

  }

  delete(_produto: Produto){
    // this.produtosCollection.doc<Produto>(_produto.id).delete()
  }

  ngOnInit() {

  }



}
// class Produtos {
// //   nome?: string;
// //   telefone?: string;
// nome: string;
// peso: number;
// altura: number;
// imc: number;
// gordura: number;
// imagem: string;
// }










