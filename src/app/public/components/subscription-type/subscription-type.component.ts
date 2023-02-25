import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { MockService } from './../../../core/services/mock.service';
import { INDEXED_COLUMNS } from './subscription-type-columns';
import { Column } from './../../../core/models/column.model';
import { SubscriptionType } from './../../../core/models/subscription-type.model';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-subscription-type',
  templateUrl: './subscription-type.component.html',
  styleUrls: ['./subscription-type.component.scss'],
})
export class SubscriptionTypeComponent implements OnInit, OnDestroy {
  subscriptionTypes: SubscriptionType[] = [];
  cols: Column[] = INDEXED_COLUMNS;
  rowCount!: number;

  readonly entity = 'subscription-type';
  protected destroy$: Subject<boolean> = new Subject();

  constructor(private mockService: MockService) {}

  ngOnInit(): void {
    this.mockService
      .getMockData(this.entity)
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        this.subscriptionTypes = data.list;
        this.rowCount = data.rowCount;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
