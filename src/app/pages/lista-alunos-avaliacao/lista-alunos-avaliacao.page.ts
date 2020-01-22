import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-alunos-avaliacao',
  templateUrl: './lista-alunos-avaliacao.page.html',
  styleUrls: ['./lista-alunos-avaliacao.page.scss'],
})
export class ListaAlunosAvaliacaoPage implements OnInit {


  alunos = [
    { nome: 'Thiago Ventura', ausencia: false },
    { nome: 'Diana Dias Ventura', ausencia: false },
    { nome: 'Thiago Souza de Lima', ausencia: false },
    { nome: 'Francisco Elineuton', ausencia: false },
    { nome: 'Iam Barroso', ausencia: false },
    { nome: 'Genildo Gomes da Silva', ausencia: false },
    { nome: 'Ana Francisca', ausencia: false },
    { nome: 'Anne Shirley', ausencia: false },
  ];

  exibeBarraPesquisa: false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  avaliar() {
    this.router.navigateByUrl('/avaliacao');
  }

  registrarFrequencia(index: number) {

    if (this.alunos[index].ausencia) {
      this.alunos[index].ausencia = false;
    } else {
      this.alunos[index].ausencia = true;
    }
    console.log(this.alunos[index].ausencia);
  }


}
