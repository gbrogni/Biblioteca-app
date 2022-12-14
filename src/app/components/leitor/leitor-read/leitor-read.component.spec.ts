import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeitorReadComponent } from './leitor-read.component';

describe('LeitorReadComponent', () => {
  let component: LeitorReadComponent;
  let fixture: ComponentFixture<LeitorReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeitorReadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeitorReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
