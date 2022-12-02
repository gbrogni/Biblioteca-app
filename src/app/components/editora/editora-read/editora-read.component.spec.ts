import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditoraReadComponent } from './editora-read.component';

describe('EditoraReadComponent', () => {
  let component: EditoraReadComponent;
  let fixture: ComponentFixture<EditoraReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditoraReadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditoraReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
