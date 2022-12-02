import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalCreateComponent } from './local-create.component';

describe('LocalCreateComponent', () => {
  let component: LocalCreateComponent;
  let fixture: ComponentFixture<LocalCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocalCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
