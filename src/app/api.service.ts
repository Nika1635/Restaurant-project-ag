import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(public api: HttpClient) {}
  public isLoading: BehaviorSubject<boolean> = new BehaviorSubject(false)
 
  startLoading() {
    this.isLoading.next(true)
  }

  stopLoading() {
    this.isLoading.next(false)
  }

  getCards(){
    return this.api.get("https://restaurant.stepprojects.ge/api/Products/GetAll")
  }

  getCategories(){
    return this.api.get("https://restaurant.stepprojects.ge/api/Categories/GetAll")
  }

  filter(vegetarian: string, nuts: string, spiciness: string, categoriestring: string){
    return this.api.get(`https://restaurant.stepprojects.ge/api/Products/GetFiltered?${vegetarian}${nuts}${spiciness}${categoriestring}`)
  }

  cart(){
    return this.api.get(`https://restaurant.stepprojects.ge/api/Baskets/GetAll`)
  }
}
