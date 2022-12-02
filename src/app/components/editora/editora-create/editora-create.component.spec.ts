import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditoraCreateComponent } from './editora-create.component';

describe('EditoraCreateComponent', () => {
  let component: EditoraCreateComponent;
  let fixture: ComponentFixture<EditoraCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditoraCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditoraCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
