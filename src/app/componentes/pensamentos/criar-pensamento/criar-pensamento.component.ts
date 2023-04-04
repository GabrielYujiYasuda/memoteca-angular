import { PensamentoService } from './../pensamento.service';
import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css'],
})
export class CriarPensamentoComponent implements OnInit {
  //Maybe here comes the external json
  pensamento: Pensamento = {
    conteudo: '',
    autoria: '',
    modelo: '',
  };

  criarPensamento() {
    alert('Pensamento criado com SUCESSO!');
    this.service.criar(this.pensamento).subscribe(() => {
      this.router.navigate(['/listarPensamento']);
    });
  }

  cancelarPensamento() {
    alert('Pensamento CANCELADO');
  }

  constructor(private service: PensamentoService, private router: Router) {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
