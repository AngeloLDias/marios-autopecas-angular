import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor() { }
  
  public showModal: boolean = false;

  openModal() {
    this.showModal = true;
  }
  closeModal(){
    this.showModal = false;

  }
}
