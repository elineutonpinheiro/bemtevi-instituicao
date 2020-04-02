import { AvaliacaoDTO } from './../../../models/avaliacao.dto';
import { ProfissionalService } from './../../services/domain/profissional.service';
import { AlunoService } from './../../services/domain/aluno.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AvaliacaoService } from './../../services/domain/avaliacao.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AlertController} from '@ionic/angular';
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

  constructor(
    private fb: FormBuilder, 
    private avaliacaoService: AvaliacaoService,
    private alertCtrl: AlertController,
    private router: Router,
    private activeRouter: ActivatedRoute,
    private alunoService: AlunoService,
    private profissionalService: ProfissionalService,
    private datapipe: DatePipe) {
    this.alunoId = this.activeRouter.snapshot.paramMap.get('id');
    this.turmaId = this.activeRouter.snapshot.paramMap.get('turmaId');
    this.consultarAvaliador();
    this.consultarAlunoPorId(this.alunoId);
    this.criarFormAvaliacao();
    this.urlTurma = `home;id=${this.turmaId}`;
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

  salvarAvaliacao() {
      this.avaliacaoService.salvarAvaliacao(this.avaliacaoForm.value).
      subscribe(response => {
        this.avaliacao = response;
        console.log(this.avaliacao);
        this.criarAvaliacao(this.avaliacao);
      }, error => {
        console.log(error);
      });
  }

  consultarAvaliacaoPorAlunoIdEData(alunoId: number, data: string) {
    this.avaliacaoService.consultarPorAlunoIdEData(alunoId, data).
      subscribe(response => {
        this.avaliacao = response;
        console.log(this.avaliacao);
        this.criarAvaliacao(this.avaliacao);
      }, error => {});
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

  finalizarAvaliacao(){  }

  async showInsertOk() {
    const alert = await this.alertCtrl.create({
      header: 'Avaliação criada!',
      message: 'Aluno avaliado com sucesso.',
      backdropDismiss: false,
      buttons: [{
        text: 'OK',
        handler: () => {
          this.router.navigate(['/home', {id: this.turmaId}]);
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
    error => {});
  }

  consultarAvaliador() {
      this.profissionalService.consultarPorEmail('elineuton.ps@gmail.com')
      .subscribe(response => {
        this.profissional = response;
        this.profissionalId = this.profissional.id.toString();
      },
      (error) => {});
  }


  incrementa(nome: string) {
    if (nome === 'banho' && this.avaliacaoForm.get('banho').value < 99) {
      this.avaliacaoForm.get('banho').setValue(this.qtdeBanho++);
    }
    if (nome === 'fralda' && this.avaliacaoForm.get('fralda').value < 99) {
      this.avaliacaoForm.get('fralda').setValue(this.qtdeFralda++);
    }
    if (nome === 'escovacao' && this.avaliacaoForm.get('escovacao').value < 99) {
      this.avaliacaoForm.get('escovacao').setValue(this.qtdeEscovacao++);
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

}
