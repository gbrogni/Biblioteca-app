import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeitorUpdateComponent } from './leitor-update.component';

describe('LeitorUpdateComponent', () => {
  let component: LeitorUpdateComponent;
  let fixture: ComponentFixture<LeitorUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeitorUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeitorUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
