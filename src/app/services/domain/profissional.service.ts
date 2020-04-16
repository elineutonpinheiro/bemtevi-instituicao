import { TurmaDTO } from 'src/models/turma.dto';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProfissionalDTO } from 'src/models/profissional.dto';

@Injectable({
    providedIn: 'root'
})
export class ProfissionalService {

    private baseUrl = 'http://192.168.0.109:8080';

    constructor(private http: HttpClient) {
    }

    consultarProfissionalPorEmail(email: string): Observable<ProfissionalDTO> {
        return this.http.get<ProfissionalDTO>
            (`${this.baseUrl}/profissionais/email?value=${email}`);
    }

    consultarTurmasPorEmailProfissional(email: string): Observable<TurmaDTO[]> {
        return this.http.get<TurmaDTO[]>(`${this.baseUrl}/profissionais/${email}/turmas`);
    }

}
