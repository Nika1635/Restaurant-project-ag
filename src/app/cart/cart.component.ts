import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormsModule } from '@angular/forms';
import { PostService } from '../post.service';

@Component({
  selector: 'app-cart',
  imports: [FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{
  constructor(public api: ApiService, private post: PostService){}

  ngOnInit(): void {
    this.getcart()
  }

  cart: any  = []
  qty: number = 1
  total: any = []
  totall: number = 0

  getcart(){
    this.api.cart().subscribe(data => {
      this.cart = data
      console.log(data)
    console.log(this.cart)
    })
    setTimeout(() => {
      this.totalPrice()
    }, 300);
  }

  totalPrice(){
    this.totall = 0
    this.total = []
    this.cart.forEach((element: any) => {
      console.log(element)
      this.total.push(element.quantity * element.price)
    })
    console.log(this.total)
    this.total.forEach((element: any) => {
      this.totall = this.totall + element
    })
  }

  plus(quantityy: number, pricee: number, id: number, event: any){
    event.preventDefault()
    let header = {
      quantity: quantityy,
      price: pricee,
      productId: id
    }
    this.post.putProduct(header).subscribe(data =>{
      this.api.cart().subscribe(data => {
        this.cart = data
      })
    })
    setTimeout(() => {
      this.totalPrice()
    }, 300);
  }

  deleteproduct(id: number, event: any){
    event.preventDefault()
    this.post.delete(id).subscribe(data => {
      this.api.cart().subscribe(data => {
        this.cart = data
      })
    })

    setTimeout(() => {
      this.totalPrice()
    }, 300);
  }
}
