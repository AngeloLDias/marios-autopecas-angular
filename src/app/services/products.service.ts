import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'
import { Produtos } from '../model/pruducts';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  public url = environment.url
  public produtos: Produtos[];

  constructor(private http: HttpClient) { }

  getProdutos(): Observable<Produtos[]> {

    return this.http.get<Produtos[]>(this.url);
  }

}





