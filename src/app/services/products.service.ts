import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Producto } from '../interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

  getProducts(){
    return this.http.get<Producto[]>(`${environment.baseUrlApi}`);
  }
  getDetail(id:number){
    return this.http.get<Producto>(`${environment.baseUrlApi}/${id}`);
  }
  deleteItem(id:number){
    debugger;
      return this.http.delete(`${environment.baseUrlApi}/${id}`);
  }
  addItem(item:Producto){
      return this.http.post(`${environment.baseUrlApi}`,item);
  }
}
