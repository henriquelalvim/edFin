import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Aula } from './aula/aula';
import { AulaModel } from '../models/aula.model'; // Importando o modelo Aula


@Component({
  selector: 'app-aulas',
  templateUrl: './aulas.html',
  imports: [CommonModule, Aula],
  styleUrls: ['./aulas.css']
})
export class Aulas {
  aulas: AulaModel[] =[
    { title: 'Economia', description: 'Introdução à economia.', imageUrl: '../../assets/economiaAula.jpg' },
    { title: 'Mercado Financeiro', description: 'Aprendendo sobre o mercado financeiro.', imageUrl: 'URL_DA_IMAGEM_MERCADO' },
    { title: 'Educação Financeira', description: 'Conceitos fundamentais para educação financeira.', imageUrl: 'URL_DA_IMAGEM_EDUCACAO' },
    { title: 'Contabilidade', description: 'Princípios básicos da contabilidade.', imageUrl: 'URL_DA_IMAGEM_CONTABILIDADE' },
    { title: 'Administração', description: 'Fundamentos da administração.', imageUrl: 'URL_DA_IMAGEM_ADMINISTRACAO' },
  ];

  getAulaClass(index: number): boolean {
    return index % 2 === 0; // Verdadeiro para índices pares (esquerda)
  }
}