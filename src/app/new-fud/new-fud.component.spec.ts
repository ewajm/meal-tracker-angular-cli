/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NewFudComponent } from './new-fud.component';

describe('NewFudComponent', () => {
  let component: NewFudComponent;
  let fixture: ComponentFixture<NewFudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewFudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewFudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
