import { Injectable } from "@angular/core";
import { Product } from "../modeli/Products.model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";


const baseUrl="http://localhost:8080/api/products";

@Injectable({
    providedIn:'root'
})
export class ProductService{


    constructor(private http: HttpClient) { }

    getAll(): Observable<Product[]> {
      return this.http.get<Product[]>(baseUrl);
    }
  
    get(id: any): Observable<Product> {
      return this.http.get(`${baseUrl}/${id}`);
    }
  
    create(data: any): Observable<any> {
      return this.http.post(baseUrl, data);
    }
  
    update( data: any): Observable<any> {
      return this.http.put(baseUrl, data);
    }
  
    delete(id: any): Observable<any> {
      return this.http.delete(`${baseUrl}/${id}`);
    }
  
    deleteAll(): Observable<any> {
      return this.http.delete(baseUrl);
    }
  
    findByName(name: any): Observable<Product[]> {
      return this.http.get<Product[]>(`${baseUrl}?title=${name}`);
    }
  




}