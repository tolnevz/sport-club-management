import { Section } from './section.model';

export interface SubscriptionType {
  id: number;
  name: string;
  section: Section;
  endDate: number;
  lessonsCount: number;
  price: number;
  isActive: boolean;
}
