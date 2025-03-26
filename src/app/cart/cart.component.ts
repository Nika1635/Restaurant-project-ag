import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart',
  imports: [FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{
  constructor(public api: ApiService){}

  ngOnInit(): void {
    this.getcart()
  }

  cart: any  = []

  getcart(){
    this.api.cart().subscribe(data => {
    this.cart = data
    console.log(this.cart)
    })
  }



}
