import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionTypeDetailComponent } from './subscription-type-detail.component';

describe('SubscriptionTypeDetailComponent', () => {
  let component: SubscriptionTypeDetailComponent;
  let fixture: ComponentFixture<SubscriptionTypeDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscriptionTypeDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionTypeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
