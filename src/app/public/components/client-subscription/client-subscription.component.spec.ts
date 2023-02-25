import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientSubscriptionComponent } from './client-subscription.component';

describe('ClientSubscriptionComponent', () => {
  let component: ClientSubscriptionComponent;
  let fixture: ComponentFixture<ClientSubscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientSubscriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
