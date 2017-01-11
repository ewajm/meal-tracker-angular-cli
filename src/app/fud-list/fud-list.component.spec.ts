/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FudListComponent } from './fud-list.component';

describe('FudListComponent', () => {
  let component: FudListComponent;
  let fixture: ComponentFixture<FudListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FudListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FudListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
