import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../../services/cart.service';

import { LANG } from '../../theme/pt'
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public lang = LANG
  public toogleMenu = false;
  public toogle = false;
  public listMenu = [];
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(['(min-width: 0)'])
    .pipe(
      map(result => result.matches)
    );
  constructor(private cartService: CartService,
    private breakpointObserver: BreakpointObserver) {}
  

  public lists = [
    {
      'section': 'ACESSÓRIO',

      'items': [

        { 'item': 'Aspiradores de Pó' },
        { 'item': 'Cabos de Bateria' },
        { 'item': 'Cabos de Som' },
        { 'item': 'Calotas' },
        { 'item': 'Calhas de Chuva' },
        { 'item': 'Câmeras de ré' },
        { 'item': 'Capas de Volante, Para-Sol e Capas de Carro' },
        { 'item': 'Carregadores' },
        { 'item': 'GPS' },

      ]
    },

    {
      'section': 'FERRAMENTAS',

      'items': [

        { 'item': 'Aspiradores de Pó' },
        { 'item': 'Cabos de Bateria' },
        { 'item': 'Cabos de Som' },
        { 'item': 'Calotas' },
        { 'item': 'Calhas de Chuva' },
        { 'item': 'Câmeras de ré' },
        { 'item': 'Capas de Volante, Para-Sol e Capas de Carro' },
        { 'item': 'Carregadores' },
        { 'item': 'GPS' },

      ]
    },

    {
      'section': 'ACESSÓRIO',

      'items': [

        { 'item': 'Aspiradores de Pó' },
        { 'item': 'Cabos de Bateria' },
        { 'item': 'Cabos de Som' },
        { 'item': 'Calotas' },
        { 'item': 'Calhas de Chuva' },
        { 'item': 'Câmeras de ré' },
        { 'item': 'Capas de Volante, Para-Sol e Capas de Carro' },
        { 'item': 'Carregadores' },
        { 'item': 'GPS' },

      ]
    },
  ];
  @Input() active: string;

  public homeActive: boolean = false;

  public productActive: boolean = false;

  public companyActive: boolean = false;

  public contactActive: boolean = false;


  



  ngOnInit() {
this.cartService.contItemCart()

    // console.log(this.active);
    // switch (this.active) {
    //   case 'home':
    //     this.homeActive = true;
    //     break;
    //   case 'produtos':
    //     this.productActive = true;
    //     break;
    //   case 'quem-somos':
    //     this.companyActive = true;
    //     break;
    //   case 'contato':
    //     this.contactActive = true;
    //     break;
    //   default:
    //     break;
    // }
  }

  toogleSideMenu() {
    this.toogleMenu = !this.toogleMenu;
  }
  toogleDropDown(index) {
    this.toogle = !this.toogle
  }
}
