import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecaoDeleteComponent } from './secao-delete.component';

describe('SecaoDeleteComponent', () => {
  let component: SecaoDeleteComponent;
  let fixture: ComponentFixture<SecaoDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecaoDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecaoDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
