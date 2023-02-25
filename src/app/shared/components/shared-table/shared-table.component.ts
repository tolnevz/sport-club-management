import { CommonService } from './../../../core/services/common.service';
import { Column } from './../../../core/models/column.model';
import { Component, ChangeDetectionStrategy, Input, ViewChild, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-shared-table',
  templateUrl: './shared-table.component.html',
  styleUrls: ['./shared-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SharedTableComponent {
  @Input() cols: Column[] = [];
  @Input() rowCount!: number;
  @Input() entityName!: string;

  private _tableData!: any[];
  @Input() set tableData(value: any[]) {
    this._tableData = value;
  }
  get tableData(): any[] {
    return this._tableData;
  }

  first = 0;
  rows = 10;

  @ViewChild('sharedTable') sharedTable: Table | undefined;

  get loading() {
    return this.commonService.isLoading$.value;
  }

  constructor(private commonService: CommonService, private _router: Router) {}

  onRowClick(id: number) {
    if (id) {
      this._router.navigate([`/admin/${this.entityName}`, id]);
    }
  }

  goToAddRoute(): void {
    this._router.navigate([`/admin/${this.entityName}/add`]);
  }

  clear(table: Table, input: HTMLInputElement) {
    input.value = '';
    table.clear();
  }

  applyFilterGlobal($event: any, stringVal: string) {
    this.sharedTable?.filterGlobal(($event.target as HTMLInputElement).value, 'contains');
  }
}
