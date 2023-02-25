import { Column } from '../../../core/models/column.model';

export const INDEXED_COLUMNS: Column[] = [
  { field: 'id', header: 'ID' },
  { field: 'fio', header: 'Name' },
  { field: 'section', header: 'Sport section', objectFieldToShow: 'name', type: 'object' },
];
