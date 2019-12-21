import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StokisPage } from './stokis.page';

describe('StokisPage', () => {
  let component: StokisPage;
  let fixture: ComponentFixture<StokisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StokisPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StokisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
