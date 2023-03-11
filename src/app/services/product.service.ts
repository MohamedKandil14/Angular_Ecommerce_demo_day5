import { productList } from './../models/producstlist';
import { Iproduct } from './../models/iproduct';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  subscribe(arg0: { next: (response: any) => any; }) {
    throw new Error('Method not implemented.');
  }
  baseurl:string="http://localhost:3005/products";

  constructor(private http:HttpClient) { }
  getAllproducts(){
return this.http.get(this.baseurl) ;
  }
  getproductById(productId:number) {
    return this.http.get(`${this.baseurl}/${productId}`)
  }
  addproduct(product:any){
   return this.http.post(`${this.baseurl}`,product)

  }
  editproduct(productId: number ,product: any){
     return this.http.put(`${this.baseurl}/${productId}`,product)
  }
  deletproduct(productId:number){
   return this.http.delete(`${this.baseurl}/${productId}`)
  }
}
