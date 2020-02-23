import { TurmaService } from './services/turma.service';
import { FormsModule } from '@angular/forms';
import { EditaAtividadePageModule } from './pages/edita-atividade/edita-atividade.module';
import { NovaAtividadePageModule } from './pages/nova-atividade/nova-atividade.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [FormsModule, BrowserModule, IonicModule.forRoot(), AppRoutingModule,
  NovaAtividadePageModule, EditaAtividadePageModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    TurmaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
