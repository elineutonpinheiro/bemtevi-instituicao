import { AlunoDTO } from './../../../models/aluno.dto';
import { API_CONFIG } from '../../../config/api.config';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TurmaDTO } from 'src/models/turma.dto';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  private baseUrl = 'http://localhost:8080';

  constructor(public http: HttpClient) {
  }

  consultarPorId(id: any): Observable<AlunoDTO> {
    //return this.http.get<TurmaDTO[]>(`${API_CONFIG.baseUrl}/turmas`);
    return this.http.get<AlunoDTO>(`${this.baseUrl}/alunos/${id}`);
  }

}
