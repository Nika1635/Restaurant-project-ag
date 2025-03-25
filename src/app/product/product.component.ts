import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product',
  imports: [CommonModule, FormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  constructor(private api: ApiService){}

  ngOnInit(): void {
    this.getcards()
    this.getcategories()
  }

  categories: any
  products: any
  slider: number = -1
  nuts: boolean = false
  vegetarian: boolean = false
  currentcategorieid: number = 0
  

  nutsstring: string = ``
  vegetarianstring: string = ``
  sliderstring: string = ``
  categoriestring: string = ``

  getcards(){
    this.api.getCards().subscribe((data) => {
      this.products = data
    })
    
    this.nutsstring = ``
    this.vegetarianstring = ``
    this.sliderstring = ``
    this.categoriestring = ``
    this.currentcategorieid = 0
  }

  getcategories(){
    this.api.getCategories().subscribe(data => {
      this.categories = data
    }) 
  }

  change(id: number){
    this.currentcategorieid = id
  }

  filter(){
    if(this.nuts == true){
      this.nutsstring = `nuts=${this.nuts}&`
    }else{
      this.nutsstring = ``
    }

    if(this.vegetarian == true){
      this.vegetarianstring = `vegeterian=${this.vegetarian}&`
    }else{
      this.vegetarianstring = ``
    }
    
    if(this.slider > -1){
      this.sliderstring = `spiciness=${this.slider}&`
    }else{
      this.sliderstring = ``
    }

    if(this.currentcategorieid > 0){
      this.categoriestring = `categoryId=${this.currentcategorieid}&`
    }else{
      this.categoriestring = ``
    }

    
    this.api.filter(this.vegetarianstring, this.nutsstring, this.sliderstring, this.categoriestring).subscribe(data => {
      this.products = data
    })
  }
}
