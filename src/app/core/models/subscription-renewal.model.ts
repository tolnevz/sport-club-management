import { ClientSubscription } from './client-subscription.model';

export interface SubscriptionRenewal {
  id: number;
  clientSubscription: ClientSubscription;
  reason: 'Doctor`s note' | 'Discretion of the director/administrator';
  extensionPeriod: number;
}
