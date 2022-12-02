import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditoraUpdateComponent } from './editora-update.component';

describe('EditoraUpdateComponent', () => {
  let component: EditoraUpdateComponent;
  let fixture: ComponentFixture<EditoraUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditoraUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditoraUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
