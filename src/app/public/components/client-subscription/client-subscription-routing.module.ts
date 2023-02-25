import { ClientSubscriptionDetailComponent } from './client-subscription-detail/client-subscription-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientSubscriptionComponent } from './client-subscription.component';

const routes: Routes = [
  { path: '', component: ClientSubscriptionComponent },
  { path: ':id', component: ClientSubscriptionDetailComponent },
  { path: 'add', component: ClientSubscriptionDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientSubscriptionRoutingModule { }
