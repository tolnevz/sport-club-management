import { takeUntil, map } from 'rxjs/operators';
import { MockService } from './../../../core/services/mock.service';
import { Subject } from 'rxjs';
import { INDEXED_COLUMNS } from './subscription-renewal-columns';
import { Column } from './../../../core/models/column.model';
import { SubscriptionRenewal } from './../../../core/models/subscription-renewal.model';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-subscription-renewal',
  templateUrl: './subscription-renewal.component.html',
  styleUrls: ['./subscription-renewal.component.scss'],
})
export class SubscriptionRenewalComponent implements OnInit, OnDestroy {
  subscriptionRenewals: SubscriptionRenewal[] = [];
  cols: Column[] = INDEXED_COLUMNS;
  rowCount!: number;

  readonly entity = 'subscription-renewal';
  protected destroy$: Subject<boolean> = new Subject();

  constructor(private mockService: MockService) {}

  ngOnInit(): void {
    this.mockService
      .getMockData(this.entity)
      .pipe(
        map((data) => {
          data.list.forEach((el) => {
            el.clientFio = el.clientSubscription.client.fio;
          });
          return data;
        }),
        takeUntil(this.destroy$),
      )
      .subscribe((data) => {
        this.subscriptionRenewals = data.list;
        this.rowCount = data.rowCount;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
