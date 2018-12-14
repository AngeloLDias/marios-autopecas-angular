import { Component, OnInit } from '@angular/core';
import { LANG } from '../../theme/pt'

import { ProductsService } from '../../services/products.service'
import { CartService } from '../../services/cart.service';

import { Produtos } from '../../model/pruducts';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
  // providers: [ ProductsService, CartService ]
})
export class ProductsComponent implements OnInit {
  public lang = LANG
  public produtos: Produtos[];

  constructor(private productsService: ProductsService,
    private cartService: CartService
  ) { }


  ngOnInit() {
    // this.productsService.getProdutos().subscribe(dados =>
    // this.produtos = dados)
    this.produtos = this.productsService.produtos
    this.cartService.displayItens()
  }

  public addItemCart(produtos:Produtos,index) {
    // this.cartService.includeItem(this.productsService.produtos)
    // console.log('s', this.cartService.displayItens())

    this.cartService.includeItem(index)

    // console.log('esse eh o prod', produtos)
  }
  id(index){
    return index;
  }
  removee(index) {
    this.cartService.remove(index);

  }
  public lists = [
    {
      'section': ' MARCAS',

      'marcas': [
        { 'marca': 'BARDAHL' },
        { 'marca': 'BOSCH' },
        { 'marca': 'COBREQ' },
        { 'marca': 'DIVERSOS' },
        { 'marca': 'DYNA' },
        { 'marca': 'FANIA' },
        { 'marca': 'FIAT' },
        { 'marca': 'FRAM' },
        { 'marca': 'IKS' },
        { 'marca': 'IMPORTADOS' },
        { 'marca': 'ISAPA' },
        { 'marca': 'LUK BRASIL' },
        { 'marca': 'MAGNETI MARELLI' },
        { 'marca': 'METAL SYSTEM' },
        { 'marca': 'MOURA' },
        { 'marca': 'BARDAHL' },
        { 'marca': 'BOSCH' },
        { 'marca': 'COBREQ' },
        { 'marca': 'DIVERSOS' },
        { 'marca': 'DYNA' },
        { 'marca': 'FANIA' },
        { 'marca': 'FIAT' },
        { 'marca': 'FRAM' },
        { 'marca': 'IKS' },
        { 'marca': 'IMPORTADOS' },
        { 'marca': 'ISAPA' },
        { 'marca': 'LUK BRASIL' },
        { 'marca': 'MAGNETI MARELLI' },
        { 'marca': 'METAL SYSTEM' },
        { 'marca': 'MOURA' },
        { 'marca': 'BARDAHL' },
        { 'marca': 'BOSCH' },
        { 'marca': 'COBREQ' },
        { 'marca': 'DIVERSOS' },
        { 'marca': 'DYNA' },
        { 'marca': 'FANIA' },
        { 'marca': 'FIAT' },
        { 'marca': 'FRAM' },
        { 'marca': 'IKS' },
        { 'marca': 'IMPORTADOS' },
        { 'marca': 'ISAPA' },
        { 'marca': 'LUK BRASIL' },
        { 'marca': 'MAGNETI MARELLI' },
        { 'marca': 'METAL SYSTEM' },
        { 'marca': 'MOURA' },
      ]
    },
  ];

  // constructor() {

  // this.produtos = [
  //   { 'nome': 'VOLANTE DE DIREÇÃO ORIGINAL VOLKSWAGEN SEM TECLA DE BUZINA GOL VOYAGE SAVEIRO G6 2013 EM DIANTE', 'tipo': 'Direção', 'preco': 180, 'quantidade': 19, 'marca': 'VOLKSWAGEN', 'imagem': ['../../../assets/media/volante.jpg'] },

  //   { 'nome': 'BARRA DE DIREÇÃO AXIAL COM ROSCA FINA FIAT MOBI NOVO UNO NOVO PALIO NOVO FIORINO E GRAND SIENA TODAS AS VERSÕES MECÂNICO E HIDRÁULICO', 'tipo': 'Direção', 'preco': 188.50, 'quantidade': 9, 'marca': 'AXIAL', 'imagem': ['../../../assets/media/barra.jpg'] },

  //   {
  //     'nome': `MACACO JACARÉ PORTÁTIL 2 TONELADAS COM MALETA`, 'tipo': 'Ferramentas', 'preco': 137.00, 'quantidade': 10, 'marca': 'JACARÉ', 'imagem': ['../../../assets/media/Macaco.jpg']
  //   },
  //   { 'nome': 'VOLANTE DE DIREÇÃO ORIGINAL VOLKSWAGEN SEM TECLA DE BUZINA GOL VOYAGE SAVEIRO G6 2013 EM DIANTE', 'tipo': 'Direção', 'preco': 180, 'quantidade': 19, 'marca': 'VOLKSWAGEN', 'imagem': ['../../../assets/media/volante.jpg'] },

  //   { 'nome': 'BARRA DE DIREÇÃO AXIAL COM ROSCA FINA FIAT MOBI NOVO UNO NOVO PALIO NOVO FIORINO E GRAND SIENA TODAS AS VERSÕES MECÂNICO E HIDRÁULICO', 'tipo': 'Direção', 'preco': 188.50, 'quantidade': 9, 'marca': 'AXIAL', 'imagem': ['../../../assets/media/barra.jpg'] },

  //   {
  //     'nome': `MACACO JACARÉ PORTÁTIL 2 TONELADAS COM MALETA`, 'tipo': 'Ferramentas', 'preco': 137.00, 'quantidade': 10, 'marca': 'JACARÉ', 'imagem': ['../../../assets/media/Macaco.jpg']
  //   },
  //   { 'nome': 'VOLANTE DE DIREÇÃO ORIGINAL VOLKSWAGEN SEM TECLA DE BUZINA GOL VOYAGE SAVEIRO G6 2013 EM DIANTE', 'tipo': 'Direção', 'preco': 180, 'quantidade': 19, 'marca': 'VOLKSWAGEN', 'imagem': ['../../../assets/media/volante.jpg'] },

  //   { 'nome': 'BARRA DE DIREÇÃO AXIAL COM ROSCA FINA FIAT MOBI NOVO UNO NOVO PALIO NOVO FIORINO E GRAND SIENA TODAS AS VERSÕES MECÂNICO E HIDRÁULICO', 'tipo': 'Direção', 'preco': 188.50, 'quantidade': 9, 'marca': 'AXIAL', 'imagem': ['../../../assets/media/barra.jpg'] },

  //   {
  //     'nome': `MACACO JACARÉ PORTÁTIL 2 TONELADAS COM MALETA`, 'tipo': 'Ferramentas', 'preco': 137.00, 'quantidade': 10, 'marca': 'JACARÉ', 'imagem': ['../../../assets/media/Macaco.jpg']
  //   },
  //   { 'nome': 'VOLANTE DE DIREÇÃO ORIGINAL VOLKSWAGEN SEM TECLA DE BUZINA GOL VOYAGE SAVEIRO G6 2013 EM DIANTE', 'tipo': 'Direção', 'preco': 180, 'quantidade': 19, 'marca': 'VOLKSWAGEN', 'imagem': ['../../../assets/media/volante.jpg'] },

  //   { 'nome': 'BARRA DE DIREÇÃO AXIAL COM ROSCA FINA FIAT MOBI NOVO UNO NOVO PALIO NOVO FIORINO E GRAND SIENA TODAS AS VERSÕES MECÂNICO E HIDRÁULICO', 'tipo': 'Direção', 'preco': 188.50, 'quantidade': 9, 'marca': 'AXIAL', 'imagem': ['../../../assets/media/barra.jpg'] },

  //   {
  //     'nome': `MACACO JACARÉ PORTÁTIL 2 TONELADAS COM MALETA`, 'tipo': 'Ferramentas', 'preco': 137.00, 'quantidade': 10, 'marca': 'JACARÉ', 'imagem': ['../../../assets/media/Macaco.jpg']
  //   },
  //   { 'nome': 'VOLANTE DE DIREÇÃO ORIGINAL VOLKSWAGEN SEM TECLA DE BUZINA GOL VOYAGE SAVEIRO G6 2013 EM DIANTE', 'tipo': 'Direção', 'preco': 180, 'quantidade': 19, 'marca': 'VOLKSWAGEN', 'imagem': ['../../../assets/media/volante.jpg'] },

  //   { 'nome': 'BARRA DE DIREÇÃO AXIAL COM ROSCA FINA FIAT MOBI NOVO UNO NOVO PALIO NOVO FIORINO E GRAND SIENA TODAS AS VERSÕES MECÂNICO E HIDRÁULICO', 'tipo': 'Direção', 'preco': 188.50, 'quantidade': 9, 'marca': 'AXIAL', 'imagem': ['../../../assets/media/barra.jpg'] },

  //   {
  //     'nome': `MACACO JACARÉ PORTÁTIL 2 TONELADAS COM MALETA`, 'tipo': 'Ferramentas', 'preco': 137.00, 'quantidade': 10, 'marca': 'JACARÉ', 'imagem': ['../../../assets/media/Macaco.jpg']
  //   },


  // ];







}
