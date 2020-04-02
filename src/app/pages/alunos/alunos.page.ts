import { ActivatedRoute, Router } from '@angular/router';
import { TurmaService } from './../../services/domain/turma.service';
import { AlunoDTO } from './../../../models/aluno.dto';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.page.html',
  styleUrls: ['./alunos.page.scss'],
})
export class AlunosPage implements OnInit {

  turmaId: string;

  alunos: AlunoDTO[];

  constructor(
    private turmaService: TurmaService,
    private activeRoute: ActivatedRoute,
    private router: Router) {
    this.turmaId = this.activeRoute.snapshot.paramMap.get('id');

  }

  ngOnInit() {
    this.consultarAlunosPorTurmaId();
  }

  consultarAlunosPorTurmaId() {
    this.turmaService.consultarAlunosPorTurmaId(parseInt(this.turmaId, 10))
      .subscribe(response => {
        this.alunos = response;
      },
        error => { });
  }

  avaliarAluno(alunoId: any) {
    this.router.navigate(['/avaliacao', { id: alunoId, turmaId: this.turmaId }]);
  }

}
