import { AlunoDTO } from './../../../models/aluno.dto';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TurmaDTO } from 'src/models/turma.dto';

@Injectable({
  providedIn: 'root'
})
export class TurmaService {

  private baseUrl = 'http://192.168.0.105:8080';

  constructor(public http: HttpClient) {
  }

  consultarAlunosPorTurmaId(id: number): Observable<AlunoDTO[]> {
    return this.http.get<AlunoDTO[]>(`${this.baseUrl}/turmas/${id}/alunos`);
  }

}
