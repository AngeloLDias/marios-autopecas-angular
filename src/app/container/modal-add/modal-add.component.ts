import { Component, OnInit, Input } from '@angular/core';
import { Variable } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-modal-add',
  templateUrl: './modal-add.component.html',
  styleUrls: ['./modal-add.component.scss']
})
export class ModalAddComponent implements OnInit {

  constructor() { }
  @Input() prodname:string
  @Input() addprod:string
  // @Input() newitem: Variable;
  ngOnInit() {
  }
  public showModal: boolean = true;

  toggleModal() {
    if (this.showModal == false) {
      this.showModal = true;
    }
    else {
      this.showModal = false
    }
  }
}
