import { LoginGuard } from './guards/login.guard';
import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  /* {
    path: '',
    loadChildren: () => import('./index/index.module').then(m => m.IndexPageModule),
  }, */
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule),
    canActivate: [LoginGuard]
  },
  /* {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule),
    canActivate: [AuthGuard]
  }, */
  {
    path: 'turmas',
    loadChildren: () => import('./pages/turmas/turmas.module').then(m => m.TurmasPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'alunos',
    loadChildren: () => import('./pages/alunos/alunos.module').then( m => m.AlunosPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'avaliacao',
    loadChildren: () => import('./pages/avaliacao/avaliacao.module').then(m => m.AvaliacaoPageModule),
    canActivate: [AuthGuard]
  }
  /* {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'avaliacao',
    loadChildren: () => import('./pages/avaliacao/avaliacao.module').then(m => m.AvaliacaoPageModule)
  } */
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
