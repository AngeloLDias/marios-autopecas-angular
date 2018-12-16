import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  constructor() { }

  @Input() text:string;
  @Input() width:string;
  @Input() height:string;
  @Input() color:string;
  @Input() BC:string;

  ngOnInit() {
  }

}
