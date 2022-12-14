import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultasCreateComponent } from './consultas-create.component';

describe('ConsultasCreateComponent', () => {
  let component: ConsultasCreateComponent;
  let fixture: ComponentFixture<ConsultasCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultasCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultasCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
