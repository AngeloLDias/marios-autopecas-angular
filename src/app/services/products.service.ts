import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'
import { Produtos } from '../model/pruducts';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  // public produto = Produtos;
  public url = environment.url
  public produtos: Produtos[];

  // constructor() { }
  // constructor(private http: HttpClient) { }
  constructor() {
    this.produtos = [
      { 'nome': 'VOLANTE DE DIREÇÃO ORIGINAL VOLKSWAGEN SEM TECLA DE BUZINA GOL VOYAGE SAVEIRO G6 2013 EM DIANTE', 'tipo': 'Direção', 'preco': 180, 'quantidade': 19, 'marca': 'VOLKSWAGEN', 'imagem': ['../../../assets/media/volante.jpg'] },

      { 'nome': 'BARRA DE DIREÇÃO AXIAL COM ROSCA FINA FIAT MOBI NOVO UNO NOVO PALIO NOVO FIORINO E GRAND SIENA TODAS AS VERSÕES MECÂNICO E HIDRÁULICO', 'tipo': 'Direção', 'preco': 188.50, 'quantidade': 9, 'marca': 'AXIAL', 'imagem': ['../../../assets/media/barra.jpg'] },

      {
        'nome': `MACACO JACARÉ PORTÁTIL 2 TONELADAS 
COM 
MALETA`, 'tipo': 'Ferramentas', 'preco': 137.00, 'quantidade': 10, 'marca': 'JACARÉ', 'imagem': ['../../../assets/media/Macaco.jpg']
      },
      { 'nome': 'VOLANTE DE DIREÇÃO ORIGINAL VOLKSWAGEN SEM TECLA DE BUZINA GOL VOYAGE SAVEIRO G6 2013 EM DIANTE', 'tipo': 'Direção', 'preco': 180, 'quantidade': 19, 'marca': 'VOLKSWAGEN', 'imagem': ['../../../assets/media/volante.jpg'] },

      { 'nome': 'BARRA DE DIREÇÃO AXIAL COM ROSCA FINA FIAT MOBI NOVO UNO NOVO PALIO NOVO FIORINO E GRAND SIENA TODAS AS VERSÕES MECÂNICO E HIDRÁULICO', 'tipo': 'Direção', 'preco': 188.50, 'quantidade': 9, 'marca': 'AXIAL', 'imagem': ['../../../assets/media/barra.jpg'] },

      {
        'nome': `MACACO JACARÉ PORTÁTIL 2 TONELADAS 
COM 
MALETA`, 'tipo': 'Ferramentas', 'preco': 137.00, 'quantidade': 10, 'marca': 'JACARÉ', 'imagem': ['../../../assets/media/Macaco.jpg']
      },

      { 'nome': 'VOLANTE DE DIREÇÃO ORIGINAL VOLKSWAGEN SEM TECLA DE BUZINA GOL VOYAGE SAVEIRO G6 2013 EM DIANTE', 'tipo': 'Direção', 'preco': 180, 'quantidade': 19, 'marca': 'VOLKSWAGEN', 'imagem': ['../../../assets/media/volante.jpg'] },

      { 'nome': 'BARRA DE DIREÇÃO AXIAL COM ROSCA FINA FIAT MOBI NOVO UNO NOVO PALIO NOVO FIORINO E GRAND SIENA TODAS AS VERSÕES MECÂNICO E HIDRÁULICO', 'tipo': 'Direção', 'preco': 188.50, 'quantidade': 9, 'marca': 'AXIAL', 'imagem': ['../../../assets/media/barra.jpg'] },

      {
        'nome': `MACACO JACARÉ PORTÁTIL 2 TONELADAS 
COM 
MALETA`, 'tipo': 'Ferramentas', 'preco': 137.00, 'quantidade': 10, 'marca': 'JACARÉ', 'imagem': ['../../../assets/media/Macaco.jpg']
      },



    ];
  }
  // getProdutos(): Observable<Produtos[]> {

  //   return this.http.get<Produtos[]>(this.url);
}


  // local storage

  // set(key: string, data: any): void {
  //   // try {
  //     localStorage.setItem(key, JSON.stringify(data));
  //   // } catch (e) {
  //   //   console.error('Error saving to localStorage', e);
  //   // }
  // }
  // get(key: string) {
  //   try {
  //     return JSON.parse(localStorage.getItem(key));
  //   } catch (e) {
  //     console.error('Error getting data from localStorage', e);
  //     return null;
  //   }
  // }

  // remove(key: string, data: any) {
  //   localStorage.removeItem(key)
  //   localStorage.removeItem(JSON.stringify(data))
  // }




