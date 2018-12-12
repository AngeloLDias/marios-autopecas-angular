import { Component, OnInit } from '@angular/core';
import { Produtos } from '../../model/pruducts';
// import { Pacientes } from '../../model/pruducts';
import { ProductsService } from '../../services/products.service'
@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})


export class ListProductsComponent implements OnInit {
  public produtos: Produtos[];
  // public pacientes: Paciente[];
  // public myData;
  // public nomeP = 'eu';
  //  produtos:Array<any>

  // let nomes = document.querySelector('.nn') as HTMLElement;s
  public showModal: boolean = false;
  public showModalDontFound: boolean = false;

  // testhtml = "<p>Hello world</p>";
        

  constructor(private productsService: ProductsService) {

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


  // list1:list[]=[
  //  { nome : this.paciente , peso: 'sedgfs'}
  // ]

  // push(myData){
  //   this.paciente.push(myData.produtos);
  //   console.log(this.paciente)
  // // }
  // someMethod(index) {
  //   const myData = { produtos: this.produtos[index] };
  //   this.productsService.set('produto'+index , myData);
  //   this.produtos.push(myData.produtos);
  //   // this.push(myData)
  //   // console.log(myData.produtos)
  //   this.someOtherMethod(index)
  // }

  // del(index){
  //   this.car.splice(index, 1);
  // }
  // someOtherMethod(index) {
  //   const myData2 = { produtos: this.produtos[index] };
  //   this.pacientes.push(myData2.produtos);


  //   // console.log(myData2.produtos)
  // }

  // removee(index) {
  //   const myData = { produtos: this.produtos[index] };
  //   this.productsService.remove('produto'+index, myData);
  //   console.log(myData.produtos.nome)
  //       this.produtos.splice(index, index+1);
  //   // this.del()
  // }














  
  // public nome;
  someMethod(index) {
    const myData = { produtos: this.produtos[index] };
    // this.productsService.set('produto'+index , myData);
    this.productsService.set('nome'+index ,myData.produtos.nome);
    this.productsService.set('peso'+index , myData.produtos.peso);
    this.productsService.set('altura'+index , myData.produtos.altura);
    // this.productsService.set('gordura'+index , myData.produtos.gordura);
    // this.productsService.set('imc'+index , myData.produtos.imc);
    // this.produtos.push(myData.produtos);
    // this.someOtherMethod(index)
    document.getElementById("nome").innerHTML += this.productsService.get('nome'+index);
    document.getElementById("nome").innerHTML += this.productsService.get('peso'+index);
    document.getElementById("nome").innerHTML += this.productsService.get('altura'+index);
    alert("Produto adicionado ao carrinho!");
  }
  
  someOtherMethod(index) {
    // const myData = this.productsService.get('nome'+index);
    // const myData2 = this.productsService.get('peso'+index);
    // const myData3 = this.productsService.get('altura'+index);
    // this.pacientes.push(myData2.produtos);
    
    // document.getElementById("nome").innerHTML += this.productsService.get('nome'+index);
    // document.getElementById("nome").innerHTML += this.productsService.get('peso'+index);
    // document.getElementById("nome").innerHTML += this.productsService.get('altura'+index);
    // alert("Produto adicionado ao carrinho!");


    // console.log(myData2.produtos)
  }






}

//  class Paciente {
//   nome: string;
//   tipo: string;
//   preco: number;
//   quantidade: number;
//   marca: string;
//   imagem: Array<string>;
//   peso: any;
//   altura: number;
//   imc: number;
//   gordura: number;
// };














