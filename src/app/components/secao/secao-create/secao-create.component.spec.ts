import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecaoCreateComponent } from './secao-create.component';

describe('SecaoCreateComponent', () => {
  let component: SecaoCreateComponent;
  let fixture: ComponentFixture<SecaoCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecaoCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecaoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
