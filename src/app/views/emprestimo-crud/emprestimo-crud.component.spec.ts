import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmprestimoCrudComponent } from './emprestimo-crud.component';

describe('EmprestimoCrudComponent', () => {
  let component: EmprestimoCrudComponent;
  let fixture: ComponentFixture<EmprestimoCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmprestimoCrudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmprestimoCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
