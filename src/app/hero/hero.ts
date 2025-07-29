import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
  standalone: true
})
export class Hero {
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
