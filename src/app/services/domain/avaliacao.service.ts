import { AvaliacaoDTO } from './../../../models/avaliacao.dto';
import { API_CONFIG } from '../../../config/api.config';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TurmaDTO } from 'src/models/turma.dto';
import { AlunoDTO } from 'src/models/aluno.dto';

@Injectable({
  providedIn: 'root'
})
export class AvaliacaoService {

  private baseUrl = 'http://localhost:8080';

  constructor(public http: HttpClient) {
  }

  salvarAvaliacao(avaliacao: AvaliacaoDTO): Observable<any> {
      return this.http.put(
        `${this.baseUrl}/avaliacoes`, avaliacao);
  }

  consultarPorAlunoIdEData(alunoId: number, data: string): Observable<AvaliacaoDTO>{
    return this.http.get<AvaliacaoDTO>(`${this.baseUrl}/alunos/${alunoId}/avaliacoes?data=${data}`);
  }

}
