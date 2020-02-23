import { IndexPageRoutingModule } from './index-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { IndexPage } from './index.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndexPageRoutingModule
  ],
  declarations: [IndexPage]
})
export class IndexPageModule {}
