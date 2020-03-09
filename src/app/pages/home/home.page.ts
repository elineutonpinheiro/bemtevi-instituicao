import { FormGroup, FormBuilder } from '@angular/forms';
import { AlunoDTO } from './../../../models/aluno.dto';
import { TurmaService } from './../../services/domain/turma.service';
import { ProfissionalService } from './../../services/domain/profissional.service';
import { ProfissionalDTO } from 'src/models/profissional.dto';
import { StorageService } from './../../services/storage.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSelect } from '@ionic/angular';
import { TurmaDTO } from 'src/models/turma.dto';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  mostraTurma = false;
  mostraLista = true;

  turmas: TurmaDTO[];

  alunos: AlunoDTO[];

  profissional: ProfissionalDTO;

  formGroup: FormGroup;

  @ViewChild('listaDeTurmas', { static: false }) selectRef: IonSelect;

  openSelect() {
    this.selectRef.open();
  }

  /* setTurma() {
    this.turmaSelecionada = this.selectRef.value;
    console.log('Turma selecionada: ' + this.selectRef.value);
  } */


  constructor(private turmaService: TurmaService, 
              private storage: StorageService,
              private profissionalService: ProfissionalService, 
              private fb: FormBuilder) {
              this.criaForm();
              this.buscarTurmasProfissionalLogado();
  }

  ngOnInit() {
  
  }

  criaForm() {
    this.formGroup = this.fb.group({
      turmaSelecionada: [null],
    });
  }

  buscarAlunos(turmaId: number) {
    this.turmaService.consultarAlunosPorTurmaId(turmaId)
    .subscribe(response => {
      this.alunos = response;
      console.log(this.alunos);
    },
    error => { });
  }

  async buscarTurmas(id: number){
    await this.profissionalService.consultaTurmasPorProfissionalId(id)
    .subscribe(response => {
      this.turmas = response;
      this.formGroup.controls.turmaSelecionada.setValue(this.turmas[0]);
    },
    error => { });
  }

  async buscarTurmasProfissionalLogado() {
    const localUser = this.storage.getLocalUser();
    if (localUser && localUser.codigoAcesso) {
      this.profissionalService.consultarPorCodigoAcesso(localUser.codigoAcesso)
      .subscribe(response => {
        this.profissional = response;
        this.buscarTurmas(this.profissional.id);
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

}
