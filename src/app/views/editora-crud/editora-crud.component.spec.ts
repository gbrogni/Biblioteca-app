import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditoraCrudComponent } from './editora-crud.component';

describe('EditoraCrudComponent', () => {
  let component: EditoraCrudComponent;
  let fixture: ComponentFixture<EditoraCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditoraCrudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditoraCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
