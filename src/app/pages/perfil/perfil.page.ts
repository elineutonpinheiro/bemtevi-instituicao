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
      telefone: [{value: '', disabled: true}, Validators.required],
      senha: [{value: '', disabled: true},  Validators.required]
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
