import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditoraDeleteComponent } from './editora-delete.component';

describe('EditoraDeleteComponent', () => {
  let component: EditoraDeleteComponent;
  let fixture: ComponentFixture<EditoraDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditoraDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditoraDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
