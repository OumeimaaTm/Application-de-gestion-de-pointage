import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPorteComponent } from './show-porte.component';

describe('ShowPorteComponent', () => {
  let component: ShowPorteComponent;
  let fixture: ComponentFixture<ShowPorteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowPorteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPorteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
