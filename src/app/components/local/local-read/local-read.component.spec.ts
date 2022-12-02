import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalReadComponent } from './local-read.component';

describe('LocalReadComponent', () => {
  let component: LocalReadComponent;
  let fixture: ComponentFixture<LocalReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalReadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocalReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
