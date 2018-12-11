import { Component, OnInit } from '@angular/core';
import { Produtos } from '../../model/pruducts';
import { ProductsService } from '../../services/products.service'
@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})


export class ListProductsComponent implements OnInit {
  public produtos: Produtos[];
  // public myData;
  // public nomeP = 'eu';
  //  produtos:Array<any>

  // let nomes = document.querySelector('.nn') as HTMLElement;s
  public showModal: boolean = false;
  public showModalDontFound: boolean = false;

  // testhtml = "<p>Hello world</p>";
        

  constructor(private productsService: ProductsService) {



    // this.produtos = [
    //   { 'nome': 'VOLANTE DE DIREÇÃO ORIGINAL VOLKSWAGEN SEM TECLA DE BUZINA GOL VOYAGE SAVEIRO G6 2013 EM DIANTE', 'tipo': 'Direção', 'preco': 180, 'quantidade': 19, 'marca': 'VOLKSWAGEN', 'imagem': ['../../../assets/media/volante.jpg'] },

    //   { 'nome': 'BARRA DE DIREÇÃO AXIAL COM ROSCA FINA FIAT MOBI NOVO UNO NOVO PALIO NOVO FIORINO E GRAND SIENA TODAS AS VERSÕES MECÂNICO E HIDRÁULICO', 'tipo': 'Direção', 'preco': 188.50, 'quantidade': 9, 'marca': 'AXIAL', 'imagem': ['../../../assets/media/barra.jpg'] },

    //   {
    //     'nome': `MACACO JACARÉ PORTÁTIL 2 TONELADAS COM MALETA`, 'tipo': 'Ferramentas', 'preco': 137.00, 'quantidade': 10, 'marca': 'JACARÉ', 'imagem': ['../../../assets/media/Macaco.jpg']
    //   },


    // ];

  }

  ngOnInit() {
    this.productsService.getProdutos().subscribe(dados =>
      this.produtos = dados
    );
  }


  // modal


  openModal() {
    this.showModal = true;
  }
  // closeModal() {
  //   this.showModal = false;
  // }
  toggleModal() {
    if (this.showModal == false) {
      this.showModal = true;
    }
    else {
      this.showModal = false;
    }
  }


  // local storage

  someMethod(index) {
    const myData = { produtos: this.produtos[index] };
    this.productsService.set('produto'+index , myData);
    console.log(myData.produtos.nome)
  }

  someOtherMethod(index) {
    const myData2 = { produtos: this.produtos[index] };

    document.body.querySelector("#minhadiv").innerHTML = myData2.produtos.nome;
    console.log(myData2.produtos)
  }

  removee(index) {
    const myData = { produtos: this.produtos[index] };
    this.productsService.remove('produto'+index, myData);
  }

  
}
