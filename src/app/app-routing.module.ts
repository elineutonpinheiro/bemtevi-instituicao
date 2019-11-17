import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'atividades', loadChildren: './pages/atividades/atividades.module#AtividadesPageModule' },
  { path: 'perfil', loadChildren: './pages/perfil/perfil.module#PerfilPageModule' },
  { path: 'progresso-avaliacoes', loadChildren: './pages/progresso-avaliacoes/progresso-avaliacoes.module#ProgressoAvaliacoesPageModule' },
  { path: 'lista-alunos-avaliacao', loadChildren: './pages/lista-alunos-avaliacao/lista-alunos-avaliacao.module#ListaAlunosAvaliacaoPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
