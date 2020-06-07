import { environment } from './../../../environments/environment.prod';
import { AlunoDTO } from './../../../models/aluno.dto';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AvaliacaoDTO } from 'src/models/avaliacao.dto';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  private baseUrl: string;

  constructor(public http: HttpClient) {
    this.baseUrl = `${environment.apiUrl}/alunos`;
  }

  consultarPorId(id: any): Observable<AlunoDTO> {
    return this.http.get<AlunoDTO>(`${this.baseUrl}/${id}`);
  }

  consultarAvaliacaoPorAlunoIdEData(alunoId: number, data: string): Observable<AvaliacaoDTO>{
    return this.http.get<AvaliacaoDTO>(`${this.baseUrl}/${alunoId}/avaliacoes?data=${data}`);
  }

}
