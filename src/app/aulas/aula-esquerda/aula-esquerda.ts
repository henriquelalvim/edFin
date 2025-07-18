import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-aula-esquerda',
  templateUrl: './aula-esquerda.html',
  styleUrls: ['./aula-esquerda.css']
})
export class AulaEsquerda {
  @Input() title!: string;
  @Input() description!: string;
  @Input() imageUrl!: string;
}
