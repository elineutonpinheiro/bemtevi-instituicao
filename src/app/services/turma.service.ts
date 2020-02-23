import { API_CONFIG } from './../../config/api.config';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TurmaDTO } from 'src/models/turma.dto';

@Injectable({
  providedIn: 'root'
})
export class TurmaService {

  private baseUrl = 'http://localhost:8080';

  constructor(public http: HttpClient) {
  }

  findAll(): Observable<TurmaDTO[]> {
    //return this.http.get<TurmaDTO[]>(`${API_CONFIG.baseUrl}/turmas`);
    return this.http.get<TurmaDTO[]>(`${this.baseUrl}/turmas`);
  }

  findByProfissional(id: number): Observable<TurmaDTO[]> {
    //return this.http.get<TurmaDTO[]>(`${API_CONFIG.baseUrl}/turmas`);
    return this.http.get<TurmaDTO[]>(`${this.baseUrl}/profissionais/${id}/turmas`);
  }

}
