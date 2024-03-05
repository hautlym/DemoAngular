/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MessageChiefComponent } from './MessageChief.component';

describe('MessageChiefComponent', () => {
  let component: MessageChiefComponent;
  let fixture: ComponentFixture<MessageChiefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageChiefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageChiefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
