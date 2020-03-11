import { ProfissionalService } from './../../services/domain/profissional.service';
import { StorageService } from './../../services/storage.service';
import { AlunoService } from './../../services/domain/aluno.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AvaliacaoService } from './../../services/domain/avaliacao.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { AlertController, NavParams } from '@ionic/angular';
import { AlunoDTO } from 'src/models/aluno.dto';
import { ProfissionalDTO } from 'src/models/profissional.dto';

@Component({
  selector: 'app-avaliacao',
  templateUrl: './avaliacao.page.html',
  styleUrls: ['./avaliacao.page.scss'],
})
export class AvaliacaoPage implements OnInit {

  alunoId: string;

  profissionalId: string;

  aluno: AlunoDTO;

  profissional: ProfissionalDTO;

  constructor(private fb: FormBuilder, 
              private avaliacaoService: AvaliacaoService, 
              private alertCtrl: AlertController, 
              private router: Router, 
              private activeRouter: ActivatedRoute, 
              private alunoService: AlunoService,
              private storage: StorageService,
              private profissionalService: ProfissionalService) {

    this.avaliacaoForm = this.fb.group({
      alunoId: [],
      profissionalId: [],

      //PAREI AQUI
      //data: [Date.now()],
      status: ['Finalizada'],
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

    this.alunoId = this.activeRouter.snapshot.paramMap.get('id');
    console.log(this.alunoId);
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
    console.log(this.aluno);
    this.consultarPorId();
    console.log(this.aluno);
    this.consultarAvaliador();
    console.log(this.avaliacaoForm.get('profissionalId').value);
  }

  consultarPorId(){
    this.alunoService.consultarPorId(this.alunoId).
    subscribe(response => {
      this.aluno = response;
    },
    error => { })
  }

  consultarAvaliador() {
    const localUser = this.storage.getLocalUser();
    if (localUser && localUser.codigoAcesso) {
      this.profissionalService.consultarPorCodigoAcesso(localUser.codigoAcesso)
      .subscribe(response => {
        this.profissional = response;
        this.avaliacaoForm.controls.profissionalId.setValue(this.profissional.id);
        this.avaliacaoForm.controls.alunoId.setValue(parseInt(this.alunoId));
        console.log(this.profissional.id);
        console.log(this.avaliacaoForm.get('profissionalId').value);
        console.log(this.avaliacaoForm.get('alunoId').value);
      },
      (error) => {});
    }
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
