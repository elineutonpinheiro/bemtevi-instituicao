import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSelect } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  mostraTurma = false;
  mostraLista = true;
  turmaSelecionada = 'Fundamental III';

  turmas = [
    { id: '1', nome: 'Infantil I' },
    { id: '2', nome: 'Infantil II' },
    { id: '3', nome: 'Maternal III' }
  ];

  @ViewChild('turmaList', { static: false }) selectRef: IonSelect;

  openSelect() {
    this.selectRef.open();
  }

  setTurma() {
    console.log('Turma selecionada: ' + this.selectRef.value);
    this.turmaSelecionada = this.selectRef.value;
  }

  constructor() { }

  ngOnInit() {
  }

}
