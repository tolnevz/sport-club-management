import { Column } from '../../../core/models/column.model';

export const INDEXED_COLUMNS: Column[] = [
  { field: 'id', header: 'ID' },
  { field: 'clientFio', header: 'Customer name' },
  { field: 'reason', header: 'Reason for extension' },
  { field: 'extensionPeriod', header: 'Renewal period', type: 'date' },
];

export const INDEXED_COLUMNS_INNER_TABLE: Column[] = [
  { field: 'id', header: 'ID' },
  { field: 'reason', header: 'Reason for extension' },
  { field: 'extensionPeriod', header: 'Renewal period', type: 'date' },
];

