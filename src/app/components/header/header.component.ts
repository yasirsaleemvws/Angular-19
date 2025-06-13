import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule, NgFor],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true
})
export class HeaderComponent {
  isMobileMenuOpen = false;
  isProfileMenuOpen = false;

  navLinks = [
    { path: '/', text: 'Home' },
    { path: '/blogs', text: 'Blogs' },
    { path: '/faq', text: 'FAQ' }
  ];

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  toggleProfileMenu() {
    this.isProfileMenuOpen = !this.isProfileMenuOpen;
  }

  closeAllMenus() {
    this.isMobileMenuOpen = false;
    this.isProfileMenuOpen = false;
  }
}
