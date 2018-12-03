import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-edit',
  templateUrl: './modal-edit.component.html',
  styleUrls: ['./modal-edit.component.scss']
})
export class ModalEditComponent implements OnInit {

  public showModal: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  // openModal() {
  //   this.showModal = true;
  // }
  closeModal() {
    this.showModal = false;
  }

}
