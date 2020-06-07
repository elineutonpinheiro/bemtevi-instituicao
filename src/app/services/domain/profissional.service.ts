import { environment } from './../../../environments/environment.prod';
import { TurmaDTO } from 'src/models/turma.dto';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProfissionalDTO } from 'src/models/profissional.dto';

@Injectable({
    providedIn: 'root'
})
export class ProfissionalService {

    private baseUrl: string;

    constructor(private http: HttpClient) {
        this.baseUrl = `${environment.apiUrl}/profissionais`;
    }

    consultarProfissionalPorEmail(email: string): Observable<ProfissionalDTO> {
        return this.http.get<ProfissionalDTO>
            (`${this.baseUrl}/email?value=${email}`);
    }

    consultarTurmasPorEmailProfissional(email: string): Observable<TurmaDTO[]> {
        return this.http.get<TurmaDTO[]>(`${this.baseUrl}/${email}/turmas`);
    }

}
