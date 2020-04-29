import { async } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-esqueceu-senha',
  templateUrl: './esqueceu-senha.page.html',
  styleUrls: ['./esqueceu-senha.page.scss'],
})
export class EsqueceuSenhaPage implements OnInit {

  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private alertCtrl: AlertController,
    private router: Router) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.email],
    });
  }

  onSubmit() {
    this.novaSenhaPorEmail(this.loginForm.controls.email.value);
  }

  novaSenhaPorEmail(email: string) {
    this.authService.getAuth().sendPasswordResetEmail(email).then(
      async () => {
        const alert = await this.alertCtrl.create({
          header: 'SOLICITAÇÃO EFETUADA COM SUCESSO',
          message: 'O link para recuperação da senha foi enviado ao e-mail informado.',
          buttons: [
            {
              text: 'OK',
              handler: () => {
                this.router.navigate(['login']);
              }
            }
          ],
          backdropDismiss: false
        });
        await alert.present();
      })
      .catch(async () => {
        const alert = await this.alertCtrl.create({
          header: 'ERRO NA SOLICITAÇÃO',
          message: 'Favor verificar se o e-mail informado está correto.'
        });
        await alert.present();
      });
  }

}
