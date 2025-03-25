import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(public api: HttpClient) {}

  getCards(){
    return this.api.get("https://restaurant.stepprojects.ge/api/Products/GetAll")
  }

  getCategories(){
    return this.api.get("https://restaurant.stepprojects.ge/api/Categories/GetAll")
  }

  filter(vegetarian: string, nuts: string, spiciness: string, categoriestring: string){
    return this.api.get(`https://restaurant.stepprojects.ge/api/Products/GetFiltered?${vegetarian}${nuts}${spiciness}${categoriestring}`)
  }
}
