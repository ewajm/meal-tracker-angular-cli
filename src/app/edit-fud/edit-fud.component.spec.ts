/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EditFudComponent } from './edit-fud.component';

describe('EditFudComponent', () => {
  let component: EditFudComponent;
  let fixture: ComponentFixture<EditFudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
