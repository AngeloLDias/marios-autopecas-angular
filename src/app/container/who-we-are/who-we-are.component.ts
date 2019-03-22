import { Component, OnInit } from '@angular/core';

import { LANG } from '../../theme/pt'
@Component({
  selector: 'app-who-we-are',
  templateUrl: './who-we-are.component.html',
  styleUrls: ['./who-we-are.component.scss']
})
export class WhoWeAreComponent implements OnInit {
  public lang = LANG

  constructor() { }

  ngOnInit() {
  }
  histoy() {
    document.querySelector('.p4').innerHTML = 'A Mário`s AutoPeças, surgiu em findos de 2006, após uma pesquisa de mercado mostrar que existia uma lacuna no setor de reposição automotiva na zona oeste do Rio de Janeiro. Os clientes desta região eram carentes de uma loja que lhes oferecesse bom atendimento, produtos de qualidade e preço justo. Através de parcerias com os maiores e melhores distribuidores de auto peças do Rio de Janeiro. A Mário`s, através do sistema "Just in Time", mantém um excelente estoque, regular, para as mais diversas montadoras.';
  }
  missao() {
    document.querySelector('.p4').innerHTML = 'Solucionar o problema dos nossos clientes, proporcionando-lhes uma esperiência agradável de compra. Nosso lema é " Aqui além de clientes fazemos amigos".';
  }
  visao() {
    document.querySelector('.p4').innerHTML = 'Tornar-se referência na reposição automotiva.';
  }
  valores() {
    document.querySelector('.p4').innerHTML = 'Atendimento: Oferecer o melhor atendimento possível aos nossos clientes, tendo como foco a busca de solução de seu problema. Transparência: Lidar com todos de forma clara e objetiva. Comprometimento: Cumprir com tudo que é combinado e com seus deveres perante os diversos públicos (clientes, colaboradores, fornecedores e instituições públicas).';
  }
}
