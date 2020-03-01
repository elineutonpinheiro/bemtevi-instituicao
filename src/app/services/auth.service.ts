import { StorageService } from './storage.service';
import { LocalUser } from './../../models/localUser';
import { HttpClient } from '@angular/common/http';
import { CredenciaisDTO } from 'src/models/credenciais.dto';
import { Injectable } from '@angular/core';
import { API_CONFIG } from 'src/config/api.config';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
    providedIn: 'root'
  })
  export class AuthService {

    private baseUrl = 'http://localhost:8080';

     jwtHelper = new JwtHelperService();
    //jwtHelper: JwtHelper = new JwtHelper();

    constructor(public http: HttpClient,
                private storage: StorageService){
    }

    authenticate(creds: CredenciaisDTO) {
        return this.http.post(
            `${this.baseUrl}/login`,
        creds,
        {
            observe: 'response',
            responseType: 'text'
        });
    }

    refreshToken() {
        return this.http.post(
            `${this.baseUrl}/auth/refresh_token`,
        {},
        {
            observe: 'response',
            responseType: 'text'
        });
    }

    successfulLogin(authorizationValue: string) {
        let tok = authorizationValue.substr(7);
        let user: LocalUser = {
            token: tok,
            codigoAcesso: this.jwtHelper.decodeToken(tok).sub
        };
        this.storage.setLocalUser(user);
    }

    logout() {
        this.storage.setLocalUser(null);
    }
}