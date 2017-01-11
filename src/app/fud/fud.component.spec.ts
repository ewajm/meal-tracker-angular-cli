/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FudComponent } from './fud.component';

describe('FudComponent', () => {
  let component: FudComponent;
  let fixture: ComponentFixture<FudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
