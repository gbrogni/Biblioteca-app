import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmprestimoReadComponent } from './emprestimo-read.component';

describe('EmprestimoReadComponent', () => {
  let component: EmprestimoReadComponent;
  let fixture: ComponentFixture<EmprestimoReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmprestimoReadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmprestimoReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
