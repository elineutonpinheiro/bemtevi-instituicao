import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  editaInfoUsuarioForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  createForm() {
    this.editaInfoUsuarioForm = this.fb.group({
      email: [{value: '', disabled: false}, Validators.required],
      telefone: [{value: '', disabled: false}, Validators.required],
      senha: [{value: '', disabled: false},  Validators.required]
    });
  }

  /* createForm() {
    this.editaInfoUsuarioForm = this.fb.group({
      telefone: ['', Validators.required],
      senha: ['',  Validators.required]
    });
  } */

  editaInfoUsuario() {
    
  }

  onSubmit() {

  }

  ngOnInit() {
    this.createForm();
  }

}
