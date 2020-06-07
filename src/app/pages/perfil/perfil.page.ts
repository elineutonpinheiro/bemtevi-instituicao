import { AlertController } from '@ionic/angular';
import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';
import { ProfissionalService } from './../../services/domain/profissional.service';
import { FormGroup, FormBuilder} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ProfissionalDTO } from 'src/models/profissional.dto';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  editaInfoUsuarioForm: FormGroup;

  profissional: ProfissionalDTO;

  emailUsuario: any;

  constructor(
    private fb: FormBuilder,
    private profissionalService: ProfissionalService,
    private router: Router,
    private authService: AuthService,
    private alertCtrl: AlertController) {
  }

  ngOnInit() {
    this.buscarUsuarioLogado(this.authService.getAuth().currentUser.email);
    this.emailUsuario = this.authService.getAuth().currentUser.email;
  }

  ionViewDidLoad(){
   //por o que está no onInit aqui
  }

  voltar(){
    this.router.navigate(['turmas']);
  }

  buscarUsuarioLogado(email: string) {
    this.profissionalService.consultarProfissionalPorEmail(email).
      subscribe(response => {
        this.profissional = response;
      }, error => { });
  }

  redefinirSenha() {
    this.router.navigate(['esqueceu-senha']);
  }

  logout() {
    this.logoutAlertConfirm();
  }

  async logoutAlertConfirm() {
    const alert = await this.alertCtrl.create({
      header: 'SAIR',
      message: 'Você realmente deseja sair do aplicativo?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
          }
        }, {
          text: 'Sim',
          handler: () => {
            this.authService.logout();
          }
        }
      ]
    });
    await alert.present();
  }

}