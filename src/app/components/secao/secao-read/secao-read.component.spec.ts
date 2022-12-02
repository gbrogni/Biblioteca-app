import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecaoReadComponent } from './secao-read.component';

describe('SecaoReadComponent', () => {
  let component: SecaoReadComponent;
  let fixture: ComponentFixture<SecaoReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecaoReadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecaoReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
