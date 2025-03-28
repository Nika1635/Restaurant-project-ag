import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(public http: HttpClient) { }

  putProduct(data: any){
    return this.http.put(`https://restaurant.stepprojects.ge/api/Baskets/UpdateBasket`, data)
  }

  delete(id: number){
    return this.http.delete(`https://restaurant.stepprojects.ge/api/Baskets/DeleteProduct/${id}`)
  }

  addToCart(data: any){
    return this.http.post(`https://restaurant.stepprojects.ge/api/Baskets/AddToBasket`, data)
  }
}
