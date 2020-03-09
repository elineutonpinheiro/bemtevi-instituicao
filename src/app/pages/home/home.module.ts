import { TurmaService } from '../../services/domain/turma.service';
import { ProgressoAvaliacoesPage } from './../progresso-avaliacoes/progresso-avaliacoes.page';
import { ListaAlunosAvaliacaoPage } from './../lista-alunos-avaliacao/lista-alunos-avaliacao.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  declarations: [HomePage, ProgressoAvaliacoesPage, ListaAlunosAvaliacaoPage]
})
export class HomePageModule {}
