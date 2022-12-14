import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaReadComponent } from './reserva-read.component';

describe('ReservaReadComponent', () => {
  let component: ReservaReadComponent;
  let fixture: ComponentFixture<ReservaReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservaReadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservaReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
