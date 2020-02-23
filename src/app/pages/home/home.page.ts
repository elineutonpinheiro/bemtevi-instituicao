import { TurmaService } from './../../services/turma.service';
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
  turmaSelecionada = 'Infantil I';

  turmas: TurmaDTO[];

  @ViewChild('listaDeTurmas', { static: false }) selectRef: IonSelect;

  openSelect() {
    this.selectRef.open();
  }

  setTurma() {
    console.log('Turma selecionada: ' + this.selectRef.value);
    this.turmaSelecionada = this.selectRef.value;
  }

  constructor(public turmaService: TurmaService) { }

  ngOnInit() {
    this.listaTurmas();
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

}
