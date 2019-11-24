import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NovaAtividadePage } from '../nova-atividade/nova-atividade.page';

@Component({
  selector: 'app-atividades',
  templateUrl: './atividades.page.html',
  styleUrls: ['./atividades.page.scss'],
})
export class AtividadesPage implements OnInit {


  atividades: [
    // tslint:disable-next-line: max-line-length
    { titulo: 'Pintura criativa', descricao: 'Pintura para desenvolver a coordenação motora e trabalhar a criativade e inteligencia.', criadaEm: '10:45 AM' }
  ];

  constructor(public novaAtividadeController: ModalController) { }


  //Modal de Nova Atividade
  async openNovaAtividade() {
    const modal = await this.novaAtividadeController.create({
      component: NovaAtividadePage,
      cssClass: 'half-modal'
    });
    return await modal.present();
  }

  ngOnInit() {
  }

}
