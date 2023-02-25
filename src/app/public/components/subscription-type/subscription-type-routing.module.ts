import { SubscriptionTypeDetailComponent } from './subscription-type-detail/subscription-type-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubscriptionTypeComponent } from './subscription-type.component';

const routes: Routes = [
  { path: '', component: SubscriptionTypeComponent },
  { path: ':id', component: SubscriptionTypeDetailComponent },
  { path: 'add', component: SubscriptionTypeDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubscriptionTypeRoutingModule { }
