import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutorDeleteComponent } from './autor-delete.component';

describe('AutorDeleteComponent', () => {
  let component: AutorDeleteComponent;
  let fixture: ComponentFixture<AutorDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutorDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutorDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
