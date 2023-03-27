import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css'],
})
export class CriarPensamentoComponent implements OnInit {
  //Maybe here comes the external json
  pensamento = {
    id: '1',
    conteudo: 'Aprendendo Angular',
    autoria: 'Dev',
    modelo: '',
  };

  criarPensamento() {
    alert('!CRIADO!');
  }

  cancelarPensamento() {
    alert('!CANCELADO!');
  }

  constructor() {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
