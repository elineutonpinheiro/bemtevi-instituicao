import { AvaliacaoDTO } from './../../../models/avaliacao.dto';
import { API_CONFIG } from '../../../config/api.config';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TurmaDTO } from 'src/models/turma.dto';

@Injectable({
  providedIn: 'root'
})
export class AvaliacaoService {

  private baseUrl = 'http://localhost:8080';

  constructor(public http: HttpClient) {
  }
  
  /* findAll(turmaId: string): Observable<AvaliacaoDTO[]> {
    return this.http.get<AvaliacaoDTO[]>(`${this.baseUrl}/turmas/${turmaId}/avaliacoes`);
  } */

  insert(avaliacao: AvaliacaoDTO) {
      return this.http.post(
        `${this.baseUrl}/avaliacoes`,
        avaliacao,
        {
            observe: 'response',
            responseType: 'text'
        }
    );
  }

}
