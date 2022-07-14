import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPorteComponent } from './add-porte.component';

describe('AddPorteComponent', () => {
  let component: AddPorteComponent;
  let fixture: ComponentFixture<AddPorteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPorteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPorteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
