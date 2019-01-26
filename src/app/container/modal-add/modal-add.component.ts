import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-modal-add',
  templateUrl: './modal-add.component.html',
  styleUrls: ['./modal-add.component.scss']
})
export class ModalAddComponent implements OnInit {

  constructor(private productsService: ProductsService) { }

  @Input() toogleModal: string;

  ngOnInit() {
  }

  add(key, _produto) {
    this.productsService.add(key, _produto)
  }
}
