import { takeUntil } from 'rxjs/operators';
import { MockService } from './../../../core/services/mock.service';
import { Subject } from 'rxjs';
import { INDEXED_COLUMNS } from './client-columns';
import { Column } from './../../../core/models/column.model';
import { Client } from './../../../core/models/client.model';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit, OnDestroy {

  clients: Client[] = [];
  cols: Column[] = INDEXED_COLUMNS;
  rowCount!: number;

  readonly entity = 'clients';
  protected destroy$: Subject<boolean> = new Subject();

  constructor(private mockService: MockService) {}

  ngOnInit(): void {
    this.mockService
      .getMockData(this.entity)
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        this.clients = data.list;
        this.rowCount = data.rowCount;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
