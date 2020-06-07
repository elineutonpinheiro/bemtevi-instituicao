import { ProfissionalService } from './../../services/domain/profissional.service';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { CredenciaisDTO } from 'src/models/credenciais.dto';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;
  creds: CredenciaisDTO;
  loading: any;
  hide = true;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    private profissionalService: ProfissionalService,
    private alertCtrl: AlertController,
    private router: Router,
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: [''],
      senha: ['']
    });
  }

  async login() {

    this.creds = new CredenciaisDTO(this.loginForm.controls.email.value, this.loginForm.controls.senha.value);
    await this.presentLoading();

    try {
      await this.auth.login(this.creds);
    } catch (error) {
      let message: string;
      console.log(error);
      switch (error.code) {
        case 'auth/invalid-email':
          message = 'O e-mail informado é inválido';
          break;
        case 'auth/user-not-found':
          message = 'O e-mail informado não foi encontrado.';
          break;
        case 'auth/wrong-password':
          message = 'Senha inválida';
          break;
        default:
          //message = 'Os campos e-mail e senha são de preenchimento obrigatório';
          break;
      }
      this.presentToast(message);
    } finally {
      this.loading.dismiss();
      this.consultarProfissionalPorEmail(this.auth.getAuth().currentUser.email);
    }
  }

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({
      message: 'Por favor, aguarde...',
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

  consultarProfissionalPorEmail(email: string) {
    this.profissionalService.consultarProfissionalPorEmail(email).
      subscribe(response => {
        const profissional = response;
      }, error => {
        this.auth.logout();
      });
  }

  async usuarioInexistenteAlert() {
    const alert = await this.alertCtrl.create({
      header: 'ERRO',
      message: 'Usuário inexistente'
    });
    await alert.present();
  }

  esqueceuSenha() {
    this.router.navigate(['esqueceu-senha']);
  }

}
