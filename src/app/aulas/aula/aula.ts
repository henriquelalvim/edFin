import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importe o CommonModule se necessário

@Component({
  selector: 'app-aula',
  templateUrl: './aula.html', // Certifique-se que a extensão está correta
  styleUrls: ['./aula.css'],
  imports: [CommonModule] // Importando CommonModule para usar ngClass
})
export class Aula {
  @Input() title!: string;       // Título da aula
  @Input() description!: string;  // Descrição da aula
  @Input() imageUrl!: string;     // URL da imagem
  @Input() isLeft!: boolean;       // Para dar a opção de lado
}