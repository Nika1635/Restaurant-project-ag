import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { LoaderComponent } from "./loader/loader.component";
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, LoaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Onlinerestaurant-project-ag';

  constructor(public api: ApiService) {
    this.loader()
  }

  public isLoading: any

  loader() {
    this.api.isLoading.subscribe( (data:boolean) => {
      this.isLoading = data
    } )
  }
}
