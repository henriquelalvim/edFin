import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-aula-direita',
  templateUrl: './aula-direita.html',
  styleUrls: ['./aula-direita.css']
})
export class AulaDireita {
  @Input() title!: string;
  @Input() description!: string;
  @Input() imageUrl!: string;
}
