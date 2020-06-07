import { environment } from './../../../environments/environment.prod';
import { AvaliacaoDTO } from './../../../models/avaliacao.dto';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AvaliacaoService {

  private baseUrl: string;

  constructor(public http: HttpClient) {
    this.baseUrl = `${environment.apiUrl}/avaliacoes`;
  }

  salvarAvaliacao(avaliacao: AvaliacaoDTO): Observable<any> {
      return this.http.put(
        `${this.baseUrl}`, avaliacao);
  }

}
