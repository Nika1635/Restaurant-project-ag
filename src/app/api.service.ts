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
}
