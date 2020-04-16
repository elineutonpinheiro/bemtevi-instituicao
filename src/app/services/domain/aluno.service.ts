import { AlunoDTO } from './../../../models/aluno.dto';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  private baseUrl = 'http://192.168.0.109:8080';

  constructor(public http: HttpClient) {
  }

  consultarPorId(id: any): Observable<AlunoDTO> {
    return this.http.get<AlunoDTO>(`${this.baseUrl}/alunos/${id}`);
  }

}
