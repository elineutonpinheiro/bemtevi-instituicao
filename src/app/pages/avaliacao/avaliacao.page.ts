import { AuthService } from './../../services/auth.service';
import { AvaliacaoDTO } from './../../../models/avaliacao.dto';
import { ProfissionalService } from './../../services/domain/profissional.service';
import { AlunoService } from './../../services/domain/aluno.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AvaliacaoService } from './../../services/domain/avaliacao.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { AlunoDTO } from 'src/models/aluno.dto';
import { ProfissionalDTO } from 'src/models/profissional.dto';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-avaliacao',
  templateUrl: './avaliacao.page.html',
  styleUrls: ['./avaliacao.page.scss'],
})
export class AvaliacaoPage implements OnInit {

  alunoId: string;

  turmaId: string;

  profissionalId: string;

  aluno: AlunoDTO;

  profissional: ProfissionalDTO;

  avaliacaoForm: FormGroup;

  qtdeBanho = 0;

  qtdeFralda = 0;

  qtdeEscovacao = 0;

  avaliacao: AvaliacaoDTO;

  nomeAluno: string;

  statusAv: string;

  date: Date = new Date();

  data = this.datapipe.transform(this.date, 'yyyy-MM-dd');

  urlTurma: string;

  loading: any;

  constructor(
    private fb: FormBuilder,
    private avaliacaoService: AvaliacaoService,
    private alertCtrl: AlertController,
    private router: Router,
    private activeRouter: ActivatedRoute,
    private alunoService: AlunoService,
    private profissionalService: ProfissionalService,
    private datapipe: DatePipe,
    private auth: AuthService,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController) {
    this.alunoId = this.activeRouter.snapshot.paramMap.get('id');
    this.turmaId = this.activeRouter.snapshot.paramMap.get('turmaId');
    this.consultarAvaliador();
    this.consultarAlunoPorId(this.alunoId);
    this.criarFormAvaliacao();
    this.urlTurma = `alunos;id=${this.turmaId}`;
  }

  ngOnInit() {
    this.consultarAvaliacaoPorAlunoIdEData(parseInt(this.alunoId, 10), this.data);
  }

  criarFormAvaliacao() {
    this.avaliacaoForm = this.fb.group({
      id: [],
      alunoId: [],
      profissionalId: [],
      data: [],
      status: ['A_FAZER'],
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

  async salvarAvaliacao() {

    await this.presentLoading();
    try {
      this.avaliacaoService.salvarAvaliacao(this.avaliacaoForm.value).
        subscribe(response => {
          this.avaliacao = response;
          console.log(this.avaliacao);
          this.criarAvaliacao(this.avaliacao);
          this.router.navigate(['/alunos', { id: this.turmaId }]);
        }, error => {
          console.log(error);
        });
    } catch (error) {
      this.presentToast(error.message);
    } finally {
      this.loading.dismiss();
    }
  }

  consultarAvaliacaoPorAlunoIdEData(alunoId: number, data: string) {
    this.alunoService.consultarAvaliacaoPorAlunoIdEData(alunoId, data).
      subscribe(response => {
        this.avaliacao = response;
        if (this.avaliacao.banho == null) {
          this.avaliacao.banho = 0;
        }
        if (this.avaliacao.fralda == null) {
          this.avaliacao.fralda = 0;
        }
        if (this.avaliacao.escovacao == null) {
          this.avaliacao.escovacao = 0;
        }
        this.criarAvaliacao(this.avaliacao);
      }, error => { });
  }

  criarAvaliacao(avaliacao: AvaliacaoDTO) {
    this.avaliacaoForm.setValue({
      id: avaliacao.id,
      alunoId: this.alunoId,
      profissionalId: this.profissionalId,
      data: avaliacao.data,
      status: avaliacao.status,
      cafeDaManha: avaliacao.cafeDaManha,
      lancheDaManha: avaliacao.lancheDaManha,
      almoco: avaliacao.almoco,
      lancheDaTarde: avaliacao.lancheDaTarde,
      banho: avaliacao.banho,
      fralda: avaliacao.fralda,
      escovacao: avaliacao.escovacao,
      dormiu: avaliacao.dormiu,
      estadoDoSono: avaliacao.estadoDoSono,
      febre: avaliacao.febre,
      urina: avaliacao.urina,
      evacuacao: avaliacao.evacuacao,
      interacao: avaliacao.interacao,
      participacao: avaliacao.participacao,
      observacao: avaliacao.observacao
    });
    this.qtdeBanho = avaliacao.banho;
    this.qtdeFralda = avaliacao.fralda;
    this.qtdeEscovacao = avaliacao.escovacao;
  }

  concluirAvaliacao() {
    this.concluirAvaliacaoAlertConfirm();
  }

  async showInsertOk() {
    const alert = await this.alertCtrl.create({
      header: 'Avaliação criada!',
      message: 'Aluno avaliado com sucesso.',
      backdropDismiss: false,
      buttons: [{
        text: 'OK',
        handler: () => {
          this.router.navigate(['/home', { id: this.turmaId }]);
        }
      }]
    });
    await alert.present();
  }

  consultarAlunoPorId(alunoId) {
    this.alunoService.consultarPorId(alunoId).
      subscribe(response => {
        this.aluno = response;
        console.log('Aluno: ' + this.aluno);
      },
        error => { });
  }

  consultarAvaliador() {
    this.profissionalService.consultarProfissionalPorEmail(this.auth.getAuth().currentUser.email)
      .subscribe(response => {
        this.profissional = response;
        this.profissionalId = this.profissional.id.toString();
      },
        (error) => { });
  }


  incrementa(nome: string) {
    if (nome === 'banho' && this.avaliacaoForm.get('banho').value < 99) {
      this.avaliacaoForm.get('banho').setValue(this.qtdeBanho += 1);
    }
    if (nome === 'fralda' && this.avaliacaoForm.get('fralda').value < 99) {
      this.avaliacaoForm.get('fralda').setValue(this.qtdeFralda += 1);
    }
    if (nome === 'escovacao' && this.avaliacaoForm.get('escovacao').value < 99) {
      this.avaliacaoForm.get('escovacao').setValue(this.qtdeEscovacao += 1);
    }
  }

  decrementa(nome: string) {
    if (nome === 'banho' && this.avaliacaoForm.get('banho').value > 0) {
      this.avaliacaoForm.get('banho').setValue(this.qtdeBanho--);
    }
    if (nome === 'fralda' && this.avaliacaoForm.get('fralda').value > 0) {
      this.avaliacaoForm.get('fralda').setValue(this.qtdeFralda--);
    }
    if (nome === 'escovacao' && this.avaliacaoForm.get('escovacao').value > 0) {
      this.avaliacaoForm.get('escovacao').setValue(this.qtdeEscovacao--);
    }
  }

  voltar() {
    this.router.navigate(['/alunos', { id: this.turmaId }]);
  }

  async concluirAvaliacaoAlertConfirm() {
    const alert = await this.alertCtrl.create({
      header: 'Finalizar avaliação?',
      message: 'Ao finalizar não será mais possível editar a avaliação na presente data.',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Cancelado com sucesso');
          }
        }, {
          text: 'Sim',
          handler: () => {
            this.avaliacaoForm.controls.status.setValue('CONCLUIDA');
            this.salvarAvaliacao();
            this.router.navigate(['/alunos', { id: this.turmaId }]);
            console.log('Avaliação finalizada com sucesso');
          }
        }
      ]
    });
    await alert.present();
  }

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({
      message: 'Salvando avaliação...',
    });
    return this.loading.present();
  }

  async presentToast(mensagem: string) {
    const toast = await this.toastCtrl.create({
      message: mensagem,
      duration: 2000
    });
    toast.present();
  }

}
