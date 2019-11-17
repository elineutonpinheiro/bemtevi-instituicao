import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressoAvaliacoesPage } from './progresso-avaliacoes.page';

describe('ProgressoAvaliacoesPage', () => {
  let component: ProgressoAvaliacoesPage;
  let fixture: ComponentFixture<ProgressoAvaliacoesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressoAvaliacoesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressoAvaliacoesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
