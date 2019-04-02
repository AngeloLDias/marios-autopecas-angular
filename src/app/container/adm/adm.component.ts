import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { MatDialog } from '@angular/material';
import { ModalAddComponent } from 'src/app/components/modals/modal-add/modal-add.component';
import { ModalEditComponent } from 'src/app/components/modals/modal-edit/modal-edit.component';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';
@Component({
  selector: 'app-adm',
  templateUrl: './adm.component.html',
  styleUrls: ['./adm.component.scss']
})
export class AdmComponent implements OnInit {

  public products: any;
  public orders: any;
  public productsRef: any;
  public spinner: boolean = true;
  public login: any;
  public tabProducts: boolean = true;
  public tabOrder: boolean = false;

  constructor(
    private productsService: ProductsService,
    private dialog: MatDialog,
    private router: Router,
    private afAuth: AngularFireAuth,
    private orderService: OrderService
  ) {
    this.products = this.productsService.produtos;
    this.orders = this.orderService.order
    this.productsRef = this.productsService.produtosRef;
    this.afAuth.idToken.subscribe(login => {
      console.log('1', login)
      // this.login = login
      if (login == null) {
        this.router.navigate(['/login'])
      }
    });
  }

  ngOnInit() {
    this.products
      .subscribe(() => {
        this.spinner = false;
      })

      this.orders.subscribe(aa =>{
        console.log(aa)
      })
  }

  btnTabOrder() {
    this.tabProducts = false;
    this.tabOrder = true;
    console.log('click')
  }

  btnTabProducts() {
    this.tabProducts = true;
    this.tabOrder = false;
    console.log('click')
  }

  logout() {
    this.afAuth.auth.signOut();
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

  showDialogEdit() {
    this.dialog.open(ModalEditComponent)
  }

}
