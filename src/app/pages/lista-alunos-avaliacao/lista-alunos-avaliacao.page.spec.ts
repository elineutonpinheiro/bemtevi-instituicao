import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAlunosAvaliacaoPage } from './lista-alunos-avaliacao.page';

describe('ListaAlunosAvaliacaoPage', () => {
  let component: ListaAlunosAvaliacaoPage;
  let fixture: ComponentFixture<ListaAlunosAvaliacaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaAlunosAvaliacaoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaAlunosAvaliacaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
