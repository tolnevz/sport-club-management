import { Client } from './client.model';
import { SubscriptionType } from './subscription-type.model';
import { Section } from './section.model';

export interface ClientSubscription {
  id: number;
  subscriptionType: SubscriptionType;
  section: Section;
  client: Client;
  startDate: number;
  lessonsLeft?: number;
}
