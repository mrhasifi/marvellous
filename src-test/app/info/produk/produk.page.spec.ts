import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdukPage } from './produk.page';

describe('ProdukPage', () => {
  let component: ProdukPage;
  let fixture: ComponentFixture<ProdukPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdukPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdukPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
