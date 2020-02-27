import { ProfissionalService } from './services/domain/profissional.service';
import { StorageService } from './services/storage.service';
import { AuthService } from './services/auth.service';
import { TurmaService } from './services/domain/turma.service';
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
import { LoginPageModule } from './pages/login/login.module';
import { AuthInterceptorProvider } from './interceptors/auth-interceptor';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [FormsModule, BrowserModule, IonicModule.forRoot(), AppRoutingModule,
  NovaAtividadePageModule, EditaAtividadePageModule, LoginPageModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    TurmaService,
    AuthService,
    StorageService,
    ProfissionalService,
    AuthInterceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
