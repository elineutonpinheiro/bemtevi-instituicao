import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-atividade',
  templateUrl: './nova-atividade.page.html',
  styleUrls: ['./nova-atividade.page.scss'],
})
export class NovaAtividadePage implements OnInit {

  novaAtividadeForm: FormGroup;
  atividadeService: any;

  constructor(private novaAtividadeController: ModalController,
              private fb: FormBuilder,
              private router: Router) { }

  closeNovaAtividade() {
    this.novaAtividadeController.dismiss();
  }

  createForm() {
    this.novaAtividadeForm = this.fb.group({
      descricao: ['',  Validators.required],
      intante: new Date()
    });
  }

  save() {
    this.atividadeService.createAtividade(this.novaAtividadeForm.value)
      .subscribe((atividades: any) => {
        return console.log(atividades);
      }, (error: any) => console.log(error));
  }

  onSubmit() {
    this.save();
  }

  ngOnInit() {
    this.createForm();
  }

}
