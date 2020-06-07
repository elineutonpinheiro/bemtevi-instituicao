import { environment } from './../../../environments/environment.prod';
import { AlunoDTO } from './../../../models/aluno.dto';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TurmaDTO } from 'src/models/turma.dto';

@Injectable({
  providedIn: 'root'
})
export class TurmaService {

  private baseUrl: string;

  constructor(public http: HttpClient) {
    this.baseUrl = `${environment.apiUrl}/turmas`;
  }

  consultarAlunosPorTurmaId(id: number): Observable<AlunoDTO[]> {
    return this.http.get<AlunoDTO[]>(`${this.baseUrl}/${id}/alunos`);
  }

}
