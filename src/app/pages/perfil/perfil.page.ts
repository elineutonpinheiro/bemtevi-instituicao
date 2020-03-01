import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';
import { StorageService } from './../../services/storage.service';
import { ProfissionalService } from './../../services/domain/profissional.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ProfissionalDTO } from 'src/models/profissional.dto';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  editaInfoUsuarioForm: FormGroup;

  profissional: ProfissionalDTO;

  constructor(private fb: FormBuilder,
              private profissionalService: ProfissionalService,
              private storage: StorageService,
              private router: Router,
              private authService: AuthService) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.editaInfoUsuarioForm = this.fb.group({
      email: [{value: '', disabled: false}, Validators.required],
      telefone: [{value: '', disabled: false}, Validators.required],
      senha: [{value: '', disabled: false},  Validators.required]
    });
  }

  editaInfoUsuario() {

  }

  onSubmit() {

  }

  mostraInfoUsuario() {
    let localUser = this.storage.getLocalUser();
    if (localUser && localUser.codigoAcesso) {
      this.profissionalService.findByCodigoAcesso(localUser.codigoAcesso)
      .subscribe(response => {
        this.profissional = response;
      },
      (error: HttpErrorResponse) => {
        if (error.status == 403) {
          this.router.navigate(['']);
        }
      });
    } else {
      this.router.navigate(['']);
    }
    console.log('entrou no mostra usuário');
  }

  ionViewWillEnter(){
    this.mostraInfoUsuario();
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['']);
  }

}
