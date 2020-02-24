import { HttpClient } from '@angular/common/http';
import { CredenciaisDTO } from 'src/models/credenciais.dto';
import { Injectable } from '@angular/core';
import { API_CONFIG } from 'src/config/api.config';

@Injectable({
    providedIn: 'root'
  })
  export class AuthService {

    private baseUrl = 'http://localhost:8080';

    constructor(public http: HttpClient){
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
  }