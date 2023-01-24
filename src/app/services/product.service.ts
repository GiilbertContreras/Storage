import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/interfaces/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private myAppUrl = 'https://localhost:7050/';
  private myApiUrl = 'api/Product/';


  constructor(private http: HttpClient) { }

  getListproduct(): Observable<any> {
    return this.http.get(this.myAppUrl + this.myApiUrl);
  }
  getListproductFilter(): Observable<any> {
    return this.http.get(this.myAppUrl + this.myApiUrl);
  }

  searchproduct(id_product: number): Observable<any> {
    return this.http.get(this.myAppUrl + this.myApiUrl + id_product);
  }

  deleteProduct(id_product: number): Observable<any> {
    return this.http.delete(this.myAppUrl + this.myApiUrl + id_product);
  }

  saveProduct(product: Product): Observable<any> {
    return this.http.post(this.myAppUrl + this.myApiUrl, product);
  }

  updateProduct(id_product: number, product: Product): Observable<any> {
    return this.http.put(this.myAppUrl + this.myApiUrl + id_product, product);
  }

}
