import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionRenewalComponent } from './subscription-renewal.component';

describe('SubscriptionRenewalComponent', () => {
  let component: SubscriptionRenewalComponent;
  let fixture: ComponentFixture<SubscriptionRenewalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscriptionRenewalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionRenewalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
