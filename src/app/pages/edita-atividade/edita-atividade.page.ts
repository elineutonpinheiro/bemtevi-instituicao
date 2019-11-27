import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-edita-atividade',
  templateUrl: './edita-atividade.page.html',
  styleUrls: ['./edita-atividade.page.scss'],
})
export class EditaAtividadePage implements OnInit {

  editaAtividadeForm: FormGroup;
  atividadeService: any;

  constructor(private editaAtividadeController: ModalController,
              private fb: FormBuilder,
              private router: Router) { }

  closeNovaAtividade() {
    this.editaAtividadeController.dismiss();
  }

  createForm() {
    this.editaAtividadeForm = this.fb.group({
      descricao: ['',  Validators.required],
      criadaEm: new Date(),
      turmaId: ['']
    });
  }

  save() {
    this.atividadeService.createAtividade(this.editaAtividadeForm.value)
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
