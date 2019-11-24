import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-avaliacao',
  templateUrl: './avaliacao.page.html',
  styleUrls: ['./avaliacao.page.scss'],
})
export class AvaliacaoPage implements OnInit {

  categorias = [
    { nome: 'Alimentação' },
    { nome: 'Saúde' },
    { nome: 'Sono' },
    { nome: 'Higiene' },
    { nome: 'Socialização' }
  ];

  questoesAlimentacao = [
    {descricao: 'Café da manhã'},
    {descricao: 'Lanche da manhã'},
    {descricao: 'Almoço'},
    {descricao: 'Lanche da tarde'}
  ];

  questoesSaude = [
    {descricao: 'Urina'},
    {descricao: 'Evacuação'},
    {descricao: 'Febre'},
  ];

  avaliacaoForm = this.fb.group ({
    dormiu: [false]
  });

  constructor(private fb: FormBuilder) { }


  onSubmit() {

  }

  onClick() {

  }

  ngOnInit() {
  }

}
