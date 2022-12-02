import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecaoCrudComponent } from './secao-crud.component';

describe('SecaoCrudComponent', () => {
  let component: SecaoCrudComponent;
  let fixture: ComponentFixture<SecaoCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecaoCrudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecaoCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
