import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionTypeComponent } from './subscription-type.component';

describe('SubscriptionTypeComponent', () => {
  let component: SubscriptionTypeComponent;
  let fixture: ComponentFixture<SubscriptionTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscriptionTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
