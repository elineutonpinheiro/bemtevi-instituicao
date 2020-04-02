import { AlertController } from '@ionic/angular';
import { AuthService } from './../../services/auth.service';
import { ProfissionalDTO } from './../../../models/profissional.dto';
import { ProfissionalService } from './../../services/domain/profissional.service';
import { HttpErrorResponse } from '@angular/common/http';
import { TurmaService } from '../../services/domain/turma.service';
import { Component, OnInit } from '@angular/core';
import { TurmaDTO } from 'src/models/turma.dto';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-turmas',
  templateUrl: './turmas.page.html',
  styleUrls: ['./turmas.page.scss'],
})
export class TurmasPage implements OnInit {

  turmas: TurmaDTO[];

  profissional: ProfissionalDTO;

  constructor(
    private router: Router,
    private profissionalService: ProfissionalService,
    private auth: AuthService,
    private alertCtrl: AlertController) { 

  }

  ngOnInit() {
    this.consultarProfissionalPorEmail();
    this.listarTurmasPorProfissional();
  }

  listarTurmasPorProfissional() {
    this.profissionalService.consultarTurmasPorEmailProfissional(this.auth.getAuth().currentUser.email)
    .subscribe(response => {
      this.turmas = response;
    },
    error => {
      console.log(error);
    });
  }

  consultarProfissionalPorEmail() {
    this.profissionalService.consultarProfissionalPorEmail(this.auth.getAuth().currentUser.email).
    subscribe(response => {
      this.profissional = response;
      console.log(this.profissional);
    }, error => {});
  }

  selecionarTurma(turmaId: string) {
    this.router.navigate(['/alunos', {id: turmaId}]);
  }

  logout() {
    this.logoutAlertConfirm();
  }

  async logoutAlertConfirm() {
    const alert = await this.alertCtrl.create({
      header: 'LOG OUT',
      message: 'Você realmente deseja sair do aplicativo?',
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
            this.auth.logout();
            console.log('Logout com sucesso');
          }
        }
      ]
    });
    await alert.present();
  }

}
