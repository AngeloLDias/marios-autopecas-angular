import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { LANG } from '../../theme/pt'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public _toggleMenu = false
  public lang = LANG

  constructor(private cartService: CartService,
  ) { }

  ngOnInit() {
    this.cartService.contItemCart()
  }

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

  toggleMenu() {
    this._toggleMenu = !this._toggleMenu
  }
}
