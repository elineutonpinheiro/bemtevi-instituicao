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
    { descricao: 'Café da manhã' },
    { descricao: 'Lanche da manhã' },
    { descricao: 'Almoço' },
    { descricao: 'Lanche da tarde' }
  ];

  questoesSaude = [
    { descricao: 'Urina' },
    { descricao: 'Evacuação' },
    { descricao: 'Febre' },
  ];

  questoesHigiene = [
    { descricao: 'Banho', quantidade: 0 },
    { descricao: 'Fralda', quantidade: 0 },
    { descricao: 'Escovação', quantidade: 0 },
  ];
  
  avaliacaoForm = this.fb.group({
    dormiu: [false],
    febre: [false]
  });

  constructor(private fb: FormBuilder) { }


  onSubmit() {

  }

  onClick() {

  }

  ngOnInit() {
  }

  incrementa(index: number) {
    if (this.questoesHigiene[index].quantidade < 99) {
      this.questoesHigiene[index].quantidade++;
    }
  }

  decrementa(index: number) {
    if (this.questoesHigiene[index].quantidade > 0) {
      this.questoesHigiene[index].quantidade--;
    }
  }

}
