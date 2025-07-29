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

  scrollTo(elementId: string) {
    console.log('Scrolling to:', elementId); // Log para verificar o ID do elemento
    const targetElement = document.querySelector(elementId);
    if (targetElement) {
      const headerOffset = document.querySelector('.navbar')!.clientHeight; // Altura do header
      const elementPosition = targetElement.getBoundingClientRect().top; // Posição do elemento
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      console.log('Offset Position:', offsetPosition); // Log para verificar a posição de rolagem

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth' // Rolagem suave
      });
    }
  }
}