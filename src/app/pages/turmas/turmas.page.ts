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

  constructor(private router: Router,
              private profissionalService: ProfissionalService) { }

  ngOnInit() {
    this.listarTurmasPorProfissional();
  }

  listarTurmasPorProfissional() {
    this.profissionalService.consultarTurmasPorEmailProfissional('elineuton.ps@gmail.com')
    .subscribe(response => {
      this.turmas = response;
      console.log(this.turmas);
    },
    error => {
      console.log(error);
    });
  }

  selecionarTurma(turmaId: string) {
    this.router.navigate(['/home', {id: turmaId}]);
  }


}
