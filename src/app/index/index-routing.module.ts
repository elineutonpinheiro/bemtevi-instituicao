import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexPage } from './index.page';

const routes: Routes = [
    {
        path: '',
        component: IndexPage,
        children: [
            {
              path: '',
              loadChildren: () =>
                import('../pages/login/login.module').then(m => m.LoginPageModule)
            },
            {
              path: 'turmas',
              loadChildren: () =>
                import('../pages/turmas/turmas.module').then(m => m.TurmasPageModule)
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class IndexPageRoutingModule { }
