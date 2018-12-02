import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {
  //  produtos:Array<any>
//   public lists = [
//     {'section': 'Médicos', 'items': ['João', 'Mário', 'Silveira', 'Assis'] },
//     {'section': 'Bairros', 'items': ['Barra', 'Ipanema', 'Copacabana'] }
//  ];
 public produtos = [
  {'nome': 'VOLANTE DE DIREÇÃO ORIGINAL VOLKSWAGEN SEM TECLA DE BUZINA GOL VOYAGE SAVEIRO G6 2013 EM DIANTE', 'tipo': 'Direção', 'preco': 180, 'quantidade': 19, 'marca': 'VOLKSWAGEN', 'imagem':'../../../assets/media/volante.jpg'},

  {'nome': 'BARRA DE DIREÇÃO AXIAL COM ROSCA FINA FIAT MOBI NOVO UNO NOVO PALIO NOVO FIORINO E GRAND SIENA TODAS AS VERSÕES MECÂNICO E HIDRÁULICO', 'tipo': 'Direção', 'preco': 188.50, 'quantidade': 9, 'marca': 'AXIAL', 'imagem':'../../../assets/media/barra.jpg'},

  {'nome': 'MACACO JACARÉ PORTÁTIL 2 TONELADAS COM MALETA', 'tipo': 'Ferramentas', 'preco': 137.00, 'quantidade': 10, 'marca': 'JACARÉ', 'imagem':'../../../assets/media/Macaco.jpg'},


];

  constructor() { }

  ngOnInit() {
  }

}
