import { Column } from '../../../core/models/column.model';

export const INDEXED_COLUMNS: Column[] = [
  { field: 'id', header: 'ID' },
  { field: 'fio', header: 'Name' },
  { field: 'dateOfBirth', header: 'Date of birth', type: 'date' },
  { field: 'phone', header: 'Phone', type: 'phone' },
  { field: 'email', header: 'Email', type: 'email' },
];
