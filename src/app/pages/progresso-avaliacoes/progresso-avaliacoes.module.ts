import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProgressoAvaliacoesPage } from './progresso-avaliacoes.page';

const routes: Routes = [
  {
    path: '',
    component: ProgressoAvaliacoesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProgressoAvaliacoesPage]
})
export class ProgressoAvaliacoesPageModule {}
