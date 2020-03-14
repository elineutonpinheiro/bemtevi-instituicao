import { AvaliacaoService } from './../../services/domain/avaliacao.service';
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AvaliacaoPage } from './avaliacao.page';

const routes: Routes = [
  {
    path: '',
    component: AvaliacaoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [DatePipe],
  declarations: [AvaliacaoPage]
})
export class AvaliacaoPageModule {}
