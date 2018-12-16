import { Component, OnInit } from '@angular/core';

import { ModalService } from '../../../services/modal.service'
@Component({
  selector: 'app-modal-confirm-product',
  templateUrl: './modal-confirm-product.component.html',
  styleUrls: ['./modal-confirm-product.component.scss']
})
export class ModalConfirmProductComponent implements OnInit {

  constructor(private modalService:ModalService) { }
  public showModal: boolean = true;

  ngOnInit() {
  }
  // closeModal(){
  //   this.showModal = false
  // }
  toggleModal() {
    if (this.showModal == false) {
      this.showModal = true;
    }
    else {
      this.showModal = false
    }
  }
}
