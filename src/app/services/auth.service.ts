import { AngularFireAuth } from '@angular/fire/auth';
import { CredenciaisDTO } from 'src/models/credenciais.dto';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private afa: AngularFireAuth) {

    }

    login(creds: CredenciaisDTO) {
        return this.afa.auth.signInWithEmailAndPassword(creds.email, creds.senha);
    }


    // IMPLEMENTAR NA PLATAFORMA WEB
    registrar(creds: CredenciaisDTO) {
        return this.afa.auth.createUserWithEmailAndPassword(creds.email, creds.senha);
    }

    logout() {
        this.afa.auth.signOut();
    }

    getAuth() {
        return this.afa.auth;
    }
}



/*

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
            email: this.jwtHelper.decodeToken(tok).sub
        };
        this.storage.setLocalUser(user);
    }

    logout() {
        this.storage.setLocalUser(null);
    }

*/