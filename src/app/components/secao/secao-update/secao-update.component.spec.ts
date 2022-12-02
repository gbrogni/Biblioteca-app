import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecaoUpdateComponent } from './secao-update.component';

describe('SecaoUpdateComponent', () => {
  let component: SecaoUpdateComponent;
  let fixture: ComponentFixture<SecaoUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecaoUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecaoUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
