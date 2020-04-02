import { TurmaDTO } from 'src/models/turma.dto';
import { StorageService } from './../storage.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProfissionalDTO } from 'src/models/profissional.dto';
import { Usuario } from 'src/models/usuario';

@Injectable({
    providedIn: 'root'
})
export class ProfissionalService {

    private baseUrl = 'http://localhost:8080';

    constructor(private http: HttpClient) {
    }

    consultarProfissionalPorEmail(email: string): Observable<ProfissionalDTO> {
        return this.http.get<ProfissionalDTO>
            (`${this.baseUrl}/profissionais/email?value=${email}`);
    }

    consultarTurmasPorEmailProfissional(email: string): Observable<TurmaDTO[]> {
        return this.http.get<TurmaDTO[]>(`${this.baseUrl}/profissionais/${email}/turmas`);
    }

    consultarUsuarioPorEmail(email: string): Observable<Usuario> {
        return this.http.get<Usuario>(`${this.baseUrl}/profissionais/emailUsuario?value=${email}`);
    }

}