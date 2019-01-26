import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Observable } from 'rxjs';
import { AngularFireList } from '@angular/fire/database';
import { Produto } from 'src/app/model/pruducts';

@Component({
  selector: 'app-modal-edit',
  templateUrl: './modal-edit.component.html',
  styleUrls: ['./modal-edit.component.scss']
})
export class ModalEditComponent implements OnInit {
  
  public produtosRef:AngularFireList<any>

  constructor(private productsService: ProductsService) { }
  ngOnInit() {
    this.produtosRef = this.productsService.produtosRef
  }
  add(key, _produto: Produto) {
    this.productsService.add(key, _produto)
  }
}
