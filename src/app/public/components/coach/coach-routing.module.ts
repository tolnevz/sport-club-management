import { CoachDetailComponent } from './coach-detail/coach-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoachComponent } from './coach.component';

const routes: Routes = [
  { path: '', component: CoachComponent },
  { path: ':id', component: CoachDetailComponent },
  { path: 'add', component: CoachDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoachesRoutingModule {}
