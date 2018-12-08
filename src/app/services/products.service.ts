import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { Observable } from 'rxjs';
import { Http } from '@angular/http';
// import { Http, respo } from '@angular/http'
// import { IProdutos } from '../model/pruducts'  

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  // public produto = Produtos;

  constructor(private http: HttpClient) { }

  // getProdutos(): Observable<Produtos>{

  //   this.http.get<Produtos>(`http://api-pacientes.herokuapp.com/pacientes`)
  //   .subscribe(
  //     res=>{
  //       this.produto = res;
  //     },
  //     err=>{
  //       console.log(err);
  //     }
  //   );
  // }

  // getProdutos():Observable<Produtos[]>{
  //   // const url = 'http://api-pacientes.herokuapp.com/pacientes';~
      
  //   return this.http.get<Produtos[]>('http://api-pacientes.herokuapp.com/pacientes');
  // }

}

// class Produtos{
//   nome: string;
//   peso: number;
//   altura: number;
//   gordura: number;
//   imc: number;
// }