import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'
import { Produto } from '../model/pruducts';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  public url = environment.url
  public produtos: Produto[];

  constructor(private http: HttpClient) { }

  getProdutos(): Observable<Produto[]> {

    return this.http.get<Produto[]>(this.url);
  }

}





