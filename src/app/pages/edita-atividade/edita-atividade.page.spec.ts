import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaAtividadePage } from './edita-atividade.page';

describe('EditaAtvidadePage', () => {
  let component: EditaAtividadePage;
  let fixture: ComponentFixture<EditaAtividadePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditaAtividadePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaAtividadePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
