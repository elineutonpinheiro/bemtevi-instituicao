import { StorageService } from './../storage.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProfissionalDTO } from 'src/models/profissional.dto';

@Injectable({
    providedIn: 'root'
})
export class ProfissionalService {

    private baseUrl = 'http://localhost:8080';

    constructor(private http: HttpClient,
                private storage: StorageService) {
    }

    findByCodigoAcesso(codigoAcesso: string): Observable<ProfissionalDTO> {
        return this.http.get<ProfissionalDTO>
            (`${this.baseUrl}/profissionais/codigoAcesso?value=${codigoAcesso}`);
    }

}