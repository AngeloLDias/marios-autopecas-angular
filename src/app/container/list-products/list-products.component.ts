import { Component, OnInit, Input } from '@angular/core';
import { Produto } from '../../model/pruducts';
import { ProductsService } from '../../services/products.service';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ModalAddComponent } from '../../components/modals/modal-add/modal-add.component'
import { ModalEditComponent } from '../../components/modals/modal-edit/modal-edit.component'

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})


export class ListProductsComponent implements OnInit {

  public produtos:any;

  constructor(
    private productsService: ProductsService,
    private dialog:MatDialog
    ) {
    this.produtos = this.productsService.produtos
  }

  ngOnInit() {}

  edit(produto) {
    this.productsService.edit(produto)
  }

  delete(key: string) {
    this.productsService.delete(key)
  }

  showdialog() {
    this.dialog.open(ModalAddComponent)
  }

  showDialogEdit(){
    this.dialog.open(ModalEditComponent)
  }
}











