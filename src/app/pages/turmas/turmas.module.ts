import { TurmaService } from '../../services/domain/turma.service';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TurmasPage } from './turmas.page';

const routes: Routes = [
  {
    path: '',
    component: TurmasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    HttpClientModule
  ],
  providers: [
    TurmaService
  ],
  declarations: [TurmasPage]
})
export class TurmasPageModule {}
