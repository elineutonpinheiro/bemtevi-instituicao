import { AvaliacaoDTO } from './../../../models/avaliacao.dto';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AvaliacaoService {

  private baseUrl = 'http://192.168.0.109:8080';

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
