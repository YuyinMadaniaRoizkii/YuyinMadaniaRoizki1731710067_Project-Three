/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FooterYuyinComponent } from './FooterYuyin.component';

describe('FooterYuyinComponent', () => {
  let component: FooterYuyinComponent;
  let fixture: ComponentFixture<FooterYuyinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterYuyinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterYuyinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
