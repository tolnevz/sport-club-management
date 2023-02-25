import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionRenewalDetailComponent } from './subscription-renewal-detail.component';

describe('SubscriptionRenewalDetailComponent', () => {
  let component: SubscriptionRenewalDetailComponent;
  let fixture: ComponentFixture<SubscriptionRenewalDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubscriptionRenewalDetailComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionRenewalDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
