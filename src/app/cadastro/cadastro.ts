import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cadastro',
  imports: [CommonModule, FormsModule],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css',
  standalone: true
})
export class Cadastro {
  formData = {
    responsavel: '',
    aluno: '',
    idade: '',
    telefone: '',
    escola: '',
    serie: '',
    turno: '',
    email: ''
  };

  // constructor(private http: HttpClient) {}
  

  onSubmit() {
    // Troque a URL abaixo pelo endpoint do seu backend que envia o e-mail
    // const url = 'https://SEU_BACKEND_URL/api/send-email';
    // this.http.post(url, this.formData).subscribe({
    //   next: () => alert('Cadastro enviado com sucesso!'),
    //   error: () => alert('Erro ao enviar cadastro. Tente novamente.')
    // });
  }
}
