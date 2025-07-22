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
    { title: 'Economia', description: 'O curso irá introduzir noções sobre o funcionamento econômico, em nível micro e macroecômico, de forma a elevar a capacidade crítica e analítica do aluno diante dos complexos acontecimentos econômicos no mundo', imageUrl: '../../assets/economy.jpeg' },
    { title: 'Mercado Financeiro', description: 'O funcionamento do mercado financeiro é complexo, mas fundamental para quem deseja investir. Esse curso irá explicar as estruturas desse mercado, produtos financeiros como ações, renda fixa, entre outros.', imageUrl: '../../assets/mercadoFinanceiro.jpeg' },
    { title: 'Educação Financeira', description: 'Vamos ser honestos: todos nós gostaríamos de ter aprendido mais sobre esse assunto quando jovem, porque ele é essencial durante a vida adulta. Aqui aluno irá aprender matemática financeira, gerenciamento do orçamento de casa, como tomar as grandes decisões financeiras da vida como comprar a casa própria, carro, etc.', imageUrl: '../../assets/financeEducation.jpeg' },
    { title: 'Contabilidade', description: 'Complementando a jornada de educação financeira, o curso de contabilidade introduzirá o básico das demonstrações contábeis. Úteis para analisar empresas e quem sabe pontapé inicial para o jovem pensar em abrir um negócio no futuro', imageUrl: '../../assets/contabilidade2.jpeg' },
    { title: 'Administração', description: 'O estudo da administração permite aos estudantes entenderem o funcionamento de empresas de outra forma. Essa matéria complementa a formação dos estudantes, com conhecimentos que podem aplicar tanto na vida pessoal, quanto na vida profissional no futuro - quaisquer seja sua área de trabalho', imageUrl: '../../assets/admin2.jpeg' },
  ];

  getIsLeft(index: number): boolean {
    return index % 2 === 0;
  }
}