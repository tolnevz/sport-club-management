import { Column } from '../../../core/models/column.model';

export const INDEXED_COLUMNS: Column[] = [
  { field: 'id', header: 'ID' },
  { field: 'name', header: 'Name' },
  { field: 'section', header: 'Sports section', objectFieldToShow: 'name', type: 'object' },
  { field: 'endDate', header: 'Validity period', type: 'date' },
  { field: 'lessonsCount', header: 'Number of classes' },
  { field: 'price', header: 'Price', type: 'price' },
  { field: 'isActive', header: 'Active', type: 'boolean' },
];
