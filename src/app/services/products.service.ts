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

  // constructor() { }
  constructor(private http: HttpClient) { }

  set(key: string, data: any): void {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.error('Error saving to localStorage', e);
    }
  }
  get(key: string) {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (e) {
      console.error('Error getting data from localStorage', e);
      return null;
    }
  }

  remove(key: string, data: any) {
    localStorage.removeItem(key)
    localStorage.removeItem(JSON.stringify(data))
  }
  
  getProdutos(): Observable<Produtos[]> {

    return this.http.get<Produtos[]>(this.url);
  }

   

}



