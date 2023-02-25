import { SectionDetailComponent } from './section-detail/section-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SectionComponent } from './section.component';

const routes: Routes = [
  {
    path: '',
    component: SectionComponent,
  },
  {
    path: ':id',
    component: SectionDetailComponent,
  },
  {
    path: 'add',
    component: SectionDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SectionRoutingModule {}
