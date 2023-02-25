import { LayoutComponent } from './shared/components/layout/layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./public/components/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'admin',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'clients',
        pathMatch: 'full',
      },
      {
        path: 'sections',
        loadChildren: () => import('./public/components/section/section.module').then((m) => m.SectionModule),
      },
      {
        path: 'coaches',
        loadChildren: () => import('./public/components/coach/coach.module').then((m) => m.CoachModule),
      },
      {
        path: 'subscription-type',
        loadChildren: () => import('./public/components/subscription-type/subscription-type.module').then((m) => m.SubscriptionTypeModule),
      },
      {
        path: 'clients',
        loadChildren: () => import('./public/components/client/client.module').then((m) => m.ClientModule),
      },
      {
        path: 'client-subscription',
        loadChildren: () =>
          import('./public/components/client-subscription/client-subscription.module').then((m) => m.ClientSubscriptionModule),
      },
      {
        path: 'subscription-renewal',
        loadChildren: () =>
          import('./public/components/subscription-renewal/subscription-renewal.module').then((m) => m.SubscriptionRenewalModule),
      },
    ],
  },
  {
    path: '',
    redirectTo: 'admin',
    pathMatch: 'full',
  },

  {
    path: '**',
    redirectTo: 'admin',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
