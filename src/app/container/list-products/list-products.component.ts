import { Component, OnInit, Input } from '@angular/core';
import { Produto } from '../../model/pruducts';
import { ProductsService } from '../../services/products.service';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ModalAddComponent } from '../../components/modals/modal-add/modal-add.component'
import { ModalEditComponent } from '../../components/modals/modal-edit/modal-edit.component'
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})


export class ListProductsComponent implements OnInit {

  public produtos:any;
  public pedidos:any;

  constructor(
    private productsService: ProductsService,
    private dialog:MatDialog,
    private orderService: OrderService
    ) {
    this.produtos = this.productsService.produtos
    this.pedidos = this.orderService.order
  }

  ngOnInit() {
    this.pedidos
    .subscribe(aa =>{
      console.log(aa)
    })
  }

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











