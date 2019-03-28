import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { MatDialog } from '@angular/material';
import { ModalAddComponent } from 'src/app/components/modals/modal-add/modal-add.component';
import { ModalEditComponent } from 'src/app/components/modals/modal-edit/modal-edit.component';

@Component({
  selector: 'app-adm',
  templateUrl: './adm.component.html',
  styleUrls: ['./adm.component.scss']
})
export class AdmComponent implements OnInit {

  public products:any;
  public spinner:boolean = true;

  constructor(
    private productsService: ProductsService,
    private dialog: MatDialog
    ) { 
    this.products = this.productsService.produtos;
  }

  ngOnInit() {
    this.products
    .subscribe(()=>{
      this.spinner = false;
    })
  }

  edit(produto) {
    this.productsService.edit(produto)
  }

  delete(key: string) {
    this.productsService.delete(key)
  }

  showDialogAdd() {
    this.dialog.open(ModalAddComponent)
  }

  showDialogEdit(){
    this.dialog.open(ModalEditComponent)
  }

}
