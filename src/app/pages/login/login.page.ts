import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { CredenciaisDTO } from 'src/models/credenciais.dto';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;
  creds: CredenciaisDTO;

  constructor(private fb: FormBuilder,
    private nav: NavController,
    private auth: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.createForm();
    this.refreshToken();
  }

  createForm() {
    this.loginForm = this.fb.group({
      codigoAcesso: '',
      senha: ''
    });
  }

  refreshToken() {
    this.auth.refreshToken()
      .subscribe(response => {
        this.auth.successfulLogin(response.headers.get('Authorization'));
        this.router.navigate(['/tabs']);
      },
      error => { });
  }

  onSubmit() {
    this.creds = new CredenciaisDTO(this.loginForm.get('codigoAcesso').value, this.loginForm.get('senha').value);
    this.auth.authenticate(this.creds)
      .subscribe(response => {
        this.auth.successfulLogin(response.headers.get('Authorization'));
        //this.nav.navigateRoot('tabs');
        this.router.navigate(['/tabs']);
      },
      error => { });
  }

}
