import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultasReadComponent } from './consultas-read.component';

describe('ConsultasReadComponent', () => {
  let component: ConsultasReadComponent;
  let fixture: ComponentFixture<ConsultasReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultasReadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultasReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
