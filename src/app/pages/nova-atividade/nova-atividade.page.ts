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
      //titulo: ['', Validators.required],
      descricao: ['',  Validators.required],
      criadaEm: new Date(),
      turmaId: ['']
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

  protected adjustTextarea(event: any): void {
    let textarea: any		= event.target;
    textarea.style.overflow = 'hidden';
    textarea.style.height 	= 'auto';
    textarea.style.height 	= textarea.scrollHeight + 'px';
    return;
  }


  ngOnInit() {
    this.createForm();
  }

}
