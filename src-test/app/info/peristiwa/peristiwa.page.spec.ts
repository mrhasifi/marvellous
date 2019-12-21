import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeristiwaPage } from './peristiwa.page';

describe('PeristiwaPage', () => {
  let component: PeristiwaPage;
  let fixture: ComponentFixture<PeristiwaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeristiwaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeristiwaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
