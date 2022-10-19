import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarcomentarioComponent } from './editarcomentario.component';

describe('EditarcomentarioComponent', () => {
  let component: EditarcomentarioComponent;
  let fixture: ComponentFixture<EditarcomentarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarcomentarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarcomentarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
