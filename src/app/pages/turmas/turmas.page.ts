import { TurmaService } from './../../services/turma.service';
import { Component, OnInit } from '@angular/core';
import { TurmaDTO } from 'src/models/turma.dto';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-turmas',
  templateUrl: './turmas.page.html',
  styleUrls: ['./turmas.page.scss'],
})
export class TurmasPage implements OnInit {

  turmas: TurmaDTO[];

  constructor(public turmaService: TurmaService,
              private router: Router) { }

  ngOnInit() {
    this.listaTurmas();
    //this.listaTurmasPorProfissional(1);
  }

  listaTurmas() {
    this.turmaService.findAll()
    .subscribe(response => {
      this.turmas = response;
    },
    error => {
      console.log(error);
    });
  }

  listaTurmasPorProfissional(id: number) {
    this.turmaService.findByProfissional(id)
    .subscribe(response => {
      this.turmas = response;
    },
    error => {
      console.log(error);
    });
  }

  selecionarTurma() {
    this.router.navigate(['/view-unidades', ]);
  }


}
