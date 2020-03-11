import { Router } from '@angular/router';
import { AvaliacaoPage } from './../avaliacao/avaliacao.page';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AlunoDTO } from './../../../models/aluno.dto';
import { TurmaService } from './../../services/domain/turma.service';
import { ProfissionalService } from './../../services/domain/profissional.service';
import { ProfissionalDTO } from 'src/models/profissional.dto';
import { StorageService } from './../../services/storage.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSelect, NavController } from '@ionic/angular';
import { TurmaDTO } from 'src/models/turma.dto';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  //mostraTurma = false;
  //mostraLista = true;

  turmas: TurmaDTO[];

  alunos: AlunoDTO[];

  profissional: ProfissionalDTO;

  //formGroup: FormGroup;

  formTurma: FormGroup;

  turmaSelecionada: any;

  //@ViewChild('listaDeTurmas', { static: false }) selectRef: IonSelect;

  /* openSelect() {
    this.selectRef.open();
  } */

  /* setTurma() {
    this.turmaSelecionada = this.selectRef.value;
    console.log('Turma selecionada: ' + this.selectRef.value);
  } */

  onChange(event) {
    console.log('Id da turma selecionada = ' + event.target.value);
    this.turmaSelecionada = event.target.value;
    this.consultarAlunosPorTurmaId();
  }

  constructor(private turmaService: TurmaService, 
              private storage: StorageService,
              private profissionalService: ProfissionalService, 
              private fb: FormBuilder, 
              private navCtrl: NavController, 
              private router: Router) {
              //this.criaForm();
              this.criaFormTurma();
              this.buscarTurmasProfissionalLogado();
              console.log('construtor')
  }

  ngOnInit() {
    console.log('ngOnInit')
    console.log(this.formTurma.value);
  }

  criaFormTurma() {
    this.formTurma = this.fb.group({
      turma: [null],
    });
  }

  //CONTINUAR DAQUI!!!

  /* criaForm() {
    this.formGroup = this.fb.group({
      turmaSelecionada: [null],
    });
  } */

  buscarTurmas(id: number){
    this.profissionalService.consultaTurmasPorProfissionalId(id)
    .subscribe(response => {
      this.turmas = response;
    },
    error => { });
  }

  buscarTurmasProfissionalLogado() {
    const localUser = this.storage.getLocalUser();
    if (localUser && localUser.codigoAcesso) {
      this.profissionalService.consultarPorCodigoAcesso(localUser.codigoAcesso)
      .subscribe(response => {
        this.profissional = response;
        this.buscarTurmas(this.profissional.id);
        console.log(this.formTurma.value);
      },
      error => { });
    }
  }

  listarTurmas() {
    this.turmaService.findAll()
    .subscribe(response => {
      this.turmas = response;
    },
    error => { });
  }

  consultarAlunosPorTurmaId() {
    this.turmaService.consultarAlunosPorTurmaId(this.turmaSelecionada)
    .subscribe(response => {
      this.alunos = response;
      console.log(this.alunos);
    },
    error => { });
  }

  avaliarAluno(aluno: any) {
    let alunoId = aluno.id;
    this.router.navigate(['/avaliacao', {id: alunoId}]);
  }

}
