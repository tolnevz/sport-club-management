import { SubscriptionRenewalDetailComponent } from './subscription-renewal-detail/subscription-renewal-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubscriptionRenewalComponent } from './subscription-renewal.component';

const routes: Routes = [
  { path: '', component: SubscriptionRenewalComponent },
  { path: ':id', component: SubscriptionRenewalDetailComponent },
  { path: 'add', component: SubscriptionRenewalDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubscriptionRenewalRoutingModule {}
