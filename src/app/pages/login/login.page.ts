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

  constructor(private fb: FormBuilder,
              private nav: NavController) { }

  createForm() {
    this.loginForm = this.fb.group({
      codigoDeAcesso: [{value: '', disabled: false}, Validators.required],
      senha: [{value: '', disabled: false},  Validators.required]
    });
  }

  onSubmit() {
    this.nav.navigateRoot('turmas');
  }

  ngOnInit() {
    this.createForm();
  }

}
