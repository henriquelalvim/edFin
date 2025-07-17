import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
  standalone: true
})
export class Header {
  menuOpen = false; // Inicializa o menu como fechado

  toggleMenu() {
    this.menuOpen = !this.menuOpen; // Alterna o estado do menu
    console.log('Menu Open:', this.menuOpen); // Para ver se está mudando
  }

  closeMenu() {
    this.menuOpen = false; // Fecha o menu
  }
}