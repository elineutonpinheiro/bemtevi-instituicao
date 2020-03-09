import { ProfissionalService } from './../../services/domain/profissional.service';
import { HttpErrorResponse } from '@angular/common/http';
import { TurmaService } from '../../services/domain/turma.service';
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

  constructor(private turmaService: TurmaService,
              private router: Router, 
              private profissionalService: ProfissionalService) { }

  ngOnInit() {
    this.listarTurmas();
    //this.listarTurmasPorProfissional(1);
  }

  listarTurmas() {
    this.turmaService.findAll()
    .subscribe(response => {
      this.turmas = response;
    },
    error => {
      console.log(error);
    });
  }

  listarTurmasPorProfissional(id: number) {
    this.profissionalService.consultaTurmasPorProfissionalId(id)
    .subscribe(response => {
      this.turmas = response;
    },
    error => {
      console.log(error);
    });
  }

  selecionarTurma() {
    this.router.navigate(['/tabs']);
  }


}
