import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-alunos-avaliacao',
  templateUrl: './lista-alunos-avaliacao.page.html',
  styleUrls: ['./lista-alunos-avaliacao.page.scss'],
})
export class ListaAlunosAvaliacaoPage implements OnInit {


  alunos = [
    {nome: 'Thiago Ventura'},
    {nome: 'Diana Dias Ventura'},
    {nome: 'Thiago Souza de Lima'},
    {nome: 'Francisco Elineuton'},
    {nome: 'Iam Barroso'},
    {nome: 'Genildo Gomes da Silva'},
    {nome: 'Ana Francisca'},
    {nome: 'Anne Shirley'},
  ];

  exibeBarraPesquisa: false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  avaliar() {
    this.router.navigateByUrl('/avaliacao');
  }


}
