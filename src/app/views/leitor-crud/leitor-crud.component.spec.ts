import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeitorCrudComponent } from './leitor-crud.component';

describe('LeitorCrudComponent', () => {
  let component: LeitorCrudComponent;
  let fixture: ComponentFixture<LeitorCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeitorCrudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeitorCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
