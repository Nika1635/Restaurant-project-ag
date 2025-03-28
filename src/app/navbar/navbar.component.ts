import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [ RouterLink, CommonModule ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  scrollPosition = 0

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrollPosition = window.scrollY
  }
   
}
