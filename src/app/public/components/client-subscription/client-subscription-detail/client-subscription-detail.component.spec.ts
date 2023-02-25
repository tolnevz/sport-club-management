import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientSubscriptionDetailComponent } from './client-subscription-detail.component';

describe('ClientSubscriptionDetailComponent', () => {
  let component: ClientSubscriptionDetailComponent;
  let fixture: ComponentFixture<ClientSubscriptionDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientSubscriptionDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientSubscriptionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
