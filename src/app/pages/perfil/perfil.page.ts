import { StorageService } from './../../services/storage.service';
import { ProfissionalService } from './../../services/domain/profissional.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
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

  constructor(private fb: FormBuilder,
              private profissionalService: ProfissionalService,
              private storage: StorageService) { }
    
  ngOnInit() {
    this.createForm();
    this.mostraInfoUsuario();
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
      error => {});
    }
  }

}
