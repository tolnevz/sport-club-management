import { Column } from '../../../core/models/column.model';

export const INDEXED_COLUMNS: Column[] = [
  { field: 'id', header: 'ID' },
  { field: 'client', header: 'Customer', objectFieldToShow: 'fio', type: 'object' },
  { field: 'startDate', header: 'Start date', type: 'date' },
  { field: 'subscriptionType', header: 'End date', objectFieldToShow: 'endDate', type: 'object', subtype: 'date' },
  { field: 'subscriptionType', header: 'Total classes', objectFieldToShow: 'lessonsCount', type: 'object' },
  { field: 'lessonsLeft', header: 'Classes left' },
];

export const INDEXED_COLUMNS_INNER_TABLE: Column[] = [
  { field: 'id', header: 'ID' },
  { field: 'startDate', header: 'Start date', type: 'date' },
  { field: 'subscriptionType', header: 'End date', objectFieldToShow: 'endDate', type: 'object', subtype: 'date' },
  { field: 'subscriptionType', header: 'Total classes', objectFieldToShow: 'lessonsCount', type: 'object' },
  { field: 'lessonsLeft', header: 'Classes left' },
];
