import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-modal-cart',
  templateUrl: './modal-cart.component.html',
  styleUrls: ['./modal-cart.component.scss']
})
export class ModalCartComponent implements OnInit {

  public produtosRef;

  constructor(private productsService: ProductsService) {
    this.produtosRef = this.productsService.produtosRef
   }

  ngOnInit() {
  }

}
 