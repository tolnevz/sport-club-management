import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachComponent } from './coach.component';

describe('CoachesComponent', () => {
  let component: CoachComponent;
  let fixture: ComponentFixture<CoachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoachComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});