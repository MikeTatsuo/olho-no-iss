import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhenPage } from './when.page';

describe('WhenPage', () => {
  let component: WhenPage;
  let fixture: ComponentFixture<WhenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhenPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
