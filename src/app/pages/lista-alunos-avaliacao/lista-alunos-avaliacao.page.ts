import { AlunoDTO } from './../../../models/aluno.dto';
import { TurmaService } from './../../services/domain/turma.service';
import { Router } from '@angular/router';
import { Component, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-lista-alunos-avaliacao',
  templateUrl: './lista-alunos-avaliacao.page.html',
  styleUrls: ['./lista-alunos-avaliacao.page.scss'],
})
export class ListaAlunosAvaliacaoPage implements OnInit {

  @Input() turma: any;

/*   alunos = [
    { nome: 'Thiago Ventura', ausencia: false },
    { nome: 'Diana Dias Ventura', ausencia: false },
    { nome: 'Thiago Souza de Lima', ausencia: false },
    { nome: 'Francisco Elineuton', ausencia: false },
    { nome: 'Iam Barroso', ausencia: false },
    { nome: 'Genildo Gomes da Silva', ausencia: false },
    { nome: 'Ana Francisca', ausencia: false },
    { nome: 'Anne Shirley', ausencia: false },
  ]; */

  alunos: AlunoDTO[];

  exibeBarraPesquisa: false;

  constructor(private router: Router, 
              private turmaService: TurmaService) { }

  ngOnInit() {
    console.log(this.turma);
    this.consultarAlunosPorTurmaId();
  }

  consultarAlunosPorTurmaId() {
    this.turmaService.consultarAlunosPorTurmaId(this.turma.value.id)
    .subscribe(response => {
      this.alunos = response;
    },
    error => { });
  }

  avaliar() {
    this.router.navigateByUrl('/avaliacao');
  }

  registrarFrequencia(index: number) {

    if (this.alunos[index].dataPresenca) {
      this.alunos[index].dataPresenca = false;
    } else {
      this.alunos[index].dataPresenca = true;
    }
    console.log(this.alunos[index].dataPresenca);
  }


}
