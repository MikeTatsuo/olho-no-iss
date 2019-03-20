import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoPage } from './who.page';

describe('WhoPage', () => {
  let component: WhoPage;
  let fixture: ComponentFixture<WhoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
