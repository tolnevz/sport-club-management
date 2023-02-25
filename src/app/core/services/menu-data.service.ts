import { MenuItem, PrimeIcons } from 'primeng/api';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MenuDataService {
  getMenuList(): MenuItem[] {
    return [
      {
        label: 'Main',
        items: [
          { label: 'Customers', icon: PrimeIcons.USER_PLUS, routerLink: '/admin/clients', title: 'Customers' },
          { label: 'Subscriptions', icon: PrimeIcons.TICKET, routerLink: '/admin/client-subscription', title: 'Customer subscription' },
        ],
      },
      {
        label: 'Settings',
        items: [
          {
            label: 'Sports sections',
            icon: PrimeIcons.LIST,
            routerLink: '/admin/sections',
            title: 'Sports sections',
          },
          {
            label: 'Coaches',
            icon: PrimeIcons.USERS,
            routerLink: '/admin/coaches',
            title: 'Coaches',
          },
          {
            label: 'Type of subscription',
            icon: PrimeIcons.TAG,
            routerLink: '/admin/subscription-type',
            title: 'Type of subscription',
          },
          {
            label: 'Subscription renewals',
            icon: PrimeIcons.REFRESH,
            routerLink: '/admin/subscription-renewal',
            title: 'Subscription renewals',
          },
        ],
      },
    ];
  }
}
