import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JadualPage } from './jadual.page';

describe('JadualPage', () => {
  let component: JadualPage;
  let fixture: ComponentFixture<JadualPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JadualPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JadualPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
