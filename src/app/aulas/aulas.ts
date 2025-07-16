import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


interface Aula {
  title: string;
  description: string;
  imageUrl: string;
}

@Component({
  selector: 'app-aulas',
  templateUrl: './aulas.html',
  imports: [CommonModule],
  styleUrls: ['./aulas.css']
})
export class Aulas {
  aulas: Aula[] = [
    { title: 'Economia', description: 'Introdução à economia.', imageUrl: 'URL_DA_IMAGEM_ECONOMIA' },
    { title: 'Mercado Financeiro', description: 'Aprendendo sobre o mercado financeiro.', imageUrl: 'URL_DA_IMAGEM_MERCADO' },
    { title: 'Educação Financeira', description: 'Conceitos fundamentais para educação financeira.', imageUrl: 'URL_DA_IMAGEM_EDUCACAO' },
    { title: 'Contabilidade', description: 'Princípios básicos da contabilidade.', imageUrl: 'URL_DA_IMAGEM_CONTABILIDADE' },
    { title: 'Administração', description: 'Fundamentos da administração.', imageUrl: 'URL_DA_IMAGEM_ADMINISTRACAO' },
  ];
}