import { HttpClient, HttpParams } from "@angular/common/http";
import { Product } from "../models/product.model";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly _productEndPoint: string = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {}

  add(product: Product): Observable<Product> {
    return this.http.post<Product>(this._productEndPoint, product);
  }

  get(): Observable<Product[]> {
    return this.http.get<Product[]>(this._productEndPoint);
  }

  getById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this._productEndPoint}/${id}`);
  }

  update(id: number, product: Product): Observable<Product> {
    return this.http.put<Product>(`${this._productEndPoint}/${id}`, product);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this._productEndPoint}/${id}`);
  }

  getPaginated(page: number, limit: number): Observable<Product[]> {
    const params = new HttpParams()
      .set('_page', page.toString())
      .set('_limit', limit.toString());

    return this.http.get<Product[]>(this._productEndPoint, { params });
  }
}
