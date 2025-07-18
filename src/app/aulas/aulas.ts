import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AulaDireita } from './aula-direita/aula-direita';
import { AulaEsquerda } from './aula-esquerda/aula-esquerda';
import { AulaModel } from '../models/aula.model'; // Importando o modelo Aula


@Component({
  selector: 'app-aulas',
  templateUrl: './aulas.html',
  imports: [CommonModule, AulaDireita, AulaEsquerda],
  styleUrls: ['./aulas.css']
})
export class Aulas {
  aulas: AulaModel[] =[
    { title: 'Economia', description: 'Introdução à economia.', imageUrl: '../../assets/economiaAula.jpg' },
    { title: 'Mercado Financeiro', description: 'Aprendendo sobre o mercado financeiro.', imageUrl: '../../assets/mercadoFinanceiro.jpg' },
    { title: 'Educação Financeira', description: 'Conceitos fundamentais para educação financeira.', imageUrl: '../../assets/meninaEstudando.png' },
    { title: 'Contabilidade', description: 'Princípios básicos da contabilidade.', imageUrl: '../../assets/CalculadoraContas.jpg' },
    { title: 'Administração', description: 'Fundamentos da administração.', imageUrl: '../../assets/economiaAula.jpg' },
  ];

  getIsLeft(index: number): boolean {
    return index % 2 === 0;
  }
}