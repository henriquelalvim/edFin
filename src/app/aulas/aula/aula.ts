import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-aula',
  templateUrl: './aula.html',
  styleUrls: ['./aula.css']
})
export class Aula {
  @Input() title!: string;     // Título da aula
  @Input() description!: string; // Descrição da aula
  @Input() imageUrl!: string;   // URL da imagem
}