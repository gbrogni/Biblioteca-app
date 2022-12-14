import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeitorDeleteComponent } from './leitor-delete.component';

describe('LeitorDeleteComponent', () => {
  let component: LeitorDeleteComponent;
  let fixture: ComponentFixture<LeitorDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeitorDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeitorDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
