import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  constructor(private api: ApiService){}

  ngOnInit(): void {
    this.getcards()
  }

  products: any

  getcards(){
    this.api.getCards().subscribe((data) => {
      this.products = data
      console.log(data)
    })
  }
}
