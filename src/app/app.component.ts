import { Component } from '@angular/core';
import { Header } from './header/header';
import { Hero } from './hero/hero';
import { Aulas } from './aulas/aulas';
import { ComoFunciona } from './como-funciona/como-funciona';
import { QuemSomos } from './quem-somos/quem-somos';
import { Cadastro } from './cadastro/cadastro';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <app-hero></app-hero>
    <app-aulas></app-aulas>
    <app-como-funciona></app-como-funciona>
    <app-quem-somos></app-quem-somos>
    <app-cadastro></app-cadastro>
    <app-footer></app-footer>
  `,
  styles: [],
  imports: [Header, Aulas, Hero, ComoFunciona, QuemSomos, Cadastro, Footer]
})
export class AppComponent {}