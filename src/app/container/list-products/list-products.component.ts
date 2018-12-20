import { Component, OnInit, Input } from '@angular/core';
import { Produtos } from '../../model/pruducts';
// import { Pacientes } from '../../model/pruducts';
import { ProductsService } from '../../services/products.service';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { defineBase } from '@angular/core/src/render3';
@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
  ,
})


export class ListProductsComponent implements OnInit {
  // produtos: Produtos[];




  // public books: Observable<any[]>;
  public produtos: Observable<any[]>;
  public  uid
  // private booksCollection: AngularFirestoreCollection<Book>;
  private produtosCollection: AngularFirestoreCollection<Produtos>;

  constructor(private db: AngularFirestore) {
    this.produtosCollection = db.collection<Produtos>('produtos');
    this.produtos = db.collection('produtos').valueChanges();
  }

  add(_produtos: Produtos) {
    this.uid = this.db.createId()
    // this.produtosCollection.doc<Produtos>(uid).set({
    //   uid,
    //   nome: _produtos.nome,
    //   tipo:  _produtos.tipo,
    //   preco:  _produtos.preco,
    //   quantidade:  _produtos.quantidade,
    //   marca:  _produtos.marca
    // });

    console.log('sssss',this.produtosCollection)
    this.produtosCollection.add(_produtos);
  }

  update(_produtos: Produtos){
    this.produtosCollection.doc<Produtos>(_produtos.uid).update(_produtos)
  }

  delete(_produtos: Produtos){
    this.produtosCollection.doc<Produtos>(_produtos.uid).delete()
  }

  // get(uid: string): Observable<Produtos>{
  //   this.produtosCollection.doc<Produtos>(uid).valueChanges()>
  // }

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










