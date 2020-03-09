import { throwError } from 'rxjs';
import { StorageService } from './../services/storage.service';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable} from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AlertController } from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class ErrorInterceptor implements HttpInterceptor {

    constructor(private storage: StorageService,
                private alertCtrl: AlertController) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req)
        .pipe(
            catchError(error => {
                if (!error.status ) {
                    error = JSON.parse(error);
                }

                console.log('Erro detectado pelo Interceptor:');
                console.log(error)

                switch (error.status) {
                    case 401:
                        this.handle401();
                        break;
                    case 403:
                        this.handle403();
                        break;
                    default:
                        this.handleDefaultError(error);
                        break;
                }
                console.log('Passou');
                return throwError(error);
            })
        ) as any;

    }

    async handle401() {
        const alert = await this.alertCtrl.create({
            header: 'Erro 401: Falha de autenticação',
            message: 'Código de acesso ou senha inválidos',
            backdropDismiss: false,
            buttons: ['OK'],
        });

        await alert.present();
    }

    handle403() {
        this.storage.setLocalUser(null);
    }

    async handleDefaultError(error: any) {
        const alert = await this.alertCtrl.create({
            header: 'Erro ' + error.status + ': ' + error.error,
            message: error.message,
            backdropDismiss: false,
            buttons: ['OK'],
        });

        await alert.present();
    }
}

export const ErrorInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true
};

