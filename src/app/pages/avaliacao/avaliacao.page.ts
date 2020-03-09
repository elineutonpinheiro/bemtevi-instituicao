import { Router } from '@angular/router';
import { AvaliacaoService } from './../../services/domain/avaliacao.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-avaliacao',
  templateUrl: './avaliacao.page.html',
  styleUrls: ['./avaliacao.page.scss'],
})
export class AvaliacaoPage implements OnInit {

  constructor(private fb: FormBuilder, 
              private avaliacaoService: AvaliacaoService, 
              private alertCtrl: AlertController, 
              private router: Router) {

    this.avaliacaoForm = this.fb.group({
      cafeDaManha: [],
      lancheDaManha: [],
      almoco: [],
      lancheDaTarde: [],
      banho: [0],
      fralda: [0],
      escovacao: [0],
      dormiu: [false],
      estadoDoSono: [],
      febre: [false],
      urina: [],
      evacuacao: [],
      interacao: [],
      participacao: [],
      observacao: []
    });

  }

  avaliacaoForm: FormGroup;

  contador = 0;

  onSubmit() {
    console.log(this.avaliacaoForm.value);
    this.avaliacaoService.insert(this.avaliacaoForm.value)
    .subscribe(response => {
      this.showInsertOk();
    }, error => {});
  }

  async showInsertOk() {
    const alert = await this.alertCtrl.create({
      header: 'Avaliação finalizada!',
      message: 'Aluno avaliado com sucesso.',
      backdropDismiss: false,
      buttons: [{
        text: 'OK',
        handler: () => {
          this.router.navigate(['tabs/home']);
        }
      }]
    });
    await alert.present();
  }

  onClick() {
  }

  ngOnInit() {
    console.log(this.avaliacaoForm.value);
  }

  incrementa(nome: string) {
    if (nome === 'banho' && this.avaliacaoForm.get('banho').value < 99) {
      this.avaliacaoForm.get('banho').setValue(this.contador++);
    }
    if (nome === 'fralda' && this.avaliacaoForm.get('fralda').value < 99) {
      this.avaliacaoForm.get('fralda').setValue(this.contador++);
    }
    if (nome === 'escovacao' && this.avaliacaoForm.get('escovacao').value < 99) {
      this.avaliacaoForm.get('escovacao').setValue(this.contador++);
    }
  }

  decrementa(nome: string) {
    if (nome === 'banho' && this.avaliacaoForm.get('banho').value > 0) {
      this.avaliacaoForm.get('banho').setValue(this.contador--);
    }
    if (nome === 'fralda' && this.avaliacaoForm.get('fralda').value > 0) {
      this.avaliacaoForm.get('fralda').setValue(this.contador--);
    }
    if (nome === 'escovacao' && this.avaliacaoForm.get('escovacao').value > 0) {
      this.avaliacaoForm.get('escovacao').setValue(this.contador--);
    }
  }

  /* decrementa(index: number) {
    if (this.questoesHigiene[index].quantidade > 0) {
      this.questoesHigiene[index].quantidade--;
    }
  } */

  /* incrementa(index: number) {
    if (this.questoesHigiene[index].quantidade < 99) {
      this.questoesHigiene[index].quantidade++;
    }
  } */

}
