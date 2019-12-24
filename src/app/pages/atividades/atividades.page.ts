import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, IonSelect } from '@ionic/angular';
import { NovaAtividadePage } from '../nova-atividade/nova-atividade.page';
import { EditaAtividadePage } from '../edita-atividade/edita-atividade.page';

@Component({
  selector: 'app-atividades',
  templateUrl: './atividades.page.html',
  styleUrls: ['./atividades.page.scss'],
})
export class AtividadesPage implements OnInit {

  constructor(public novaAtividadeController: ModalController,
              public editaAtividadeController: ModalController) { }


  atividades: [
    // tslint:disable-next-line: max-line-length
    { titulo: 'Pintura criativa', descricao: 'Pintura para desenvolver a coordenação motora e trabalhar a criativade e inteligencia.', criadaEm: '10:45 AM' }
  ];

  // openPeriodo: false;

  // Implementação da seleção do filtro

  mostrarFiltro = false;
  showFiltros = true;
  filtroSelecionado = 'Selecione';

  @ViewChild('filtro', { static: false }) selectRef: IonSelect;

  openSelect() {
    this.selectRef.open();
  }

  setFiltro() {
    console.log('Filtro selecionado: ' + this.selectRef.value);
    this.filtroSelecionado = this.selectRef.value;
  }

  // -------------------------------------------------------------

  // Modal de Nova Atividade
  async openNovaAtividade() {
    const modal = await this.novaAtividadeController.create({
      component: NovaAtividadePage,
      cssClass: 'half-modal'
    });
    return await modal.present();
  }
  // -------------------------------------------------------------

  // Modal de Edição de Atividade
  async openEditaAtividade() {
    const modal = await this.editaAtividadeController.create({
      component: EditaAtividadePage,
      cssClass: 'half-modal'
    });
    return await modal.present();
  }
  // -------------------------------------------------------------

  // openCalendario() {
  //   console.log('Abre calendário');
  // }

  ngOnInit() {
  }

}
