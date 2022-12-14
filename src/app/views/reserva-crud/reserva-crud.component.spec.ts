import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaCrudComponent } from './reserva-crud.component';

describe('ReservaCrudComponent', () => {
  let component: ReservaCrudComponent;
  let fixture: ComponentFixture<ReservaCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservaCrudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservaCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
