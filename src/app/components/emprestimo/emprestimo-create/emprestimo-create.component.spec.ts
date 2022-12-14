import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmprestimoCreateComponent } from './emprestimo-create.component';

describe('EmprestimoCreateComponent', () => {
  let component: EmprestimoCreateComponent;
  let fixture: ComponentFixture<EmprestimoCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmprestimoCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmprestimoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
