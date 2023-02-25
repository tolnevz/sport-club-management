import { takeUntil, map } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { INDEXED_COLUMNS } from './client-subscription-columns';
import { Column } from './../../../core/models/column.model';
import { ClientSubscription } from './../../../core/models/client-subscription.model';
import { MockService } from './../../../core/services/mock.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-client-subscription',
  templateUrl: './client-subscription.component.html',
  styleUrls: ['./client-subscription.component.scss'],
})
export class ClientSubscriptionComponent implements OnInit, OnDestroy {
  clientSubscriptions: ClientSubscription[] = [];
  cols: Column[] = INDEXED_COLUMNS;
  rowCount!: number;

  readonly entity = 'client-subscription';
  protected destroy$: Subject<boolean> = new Subject();

  constructor(private mockService: MockService) {}

  ngOnInit(): void {
    this.mockService
      .getMockData(this.entity)
      .pipe(
        map(data => {
          data.list.forEach((el) => {
            el.lessonsLeft = this.calculateCountOfLeftLessons(el);
          });
          return data;
        }),
        takeUntil(this.destroy$)
        )
      .subscribe((data) => {
        this.clientSubscriptions = data.list;
        this.rowCount = data.rowCount;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  private calculateCountOfLeftLessons(element: Record<string, any>): number {
    const now = moment();
    const startDate = moment(element.startDate);
    const endDate = moment(element.subscriptionType.endDate);
    const daysCount = endDate.diff(startDate, 'days');
    const daysCountBeetween1Lesson = Math.round(daysCount / element.subscriptionType.lessonsCount);
    const lessonsEnd = now.diff(startDate, 'days') / daysCountBeetween1Lesson;
    const lessonsLeft = element.subscriptionType.lessonsCount - lessonsEnd;

    if (lessonsLeft > element.subscriptionType.lessonsCount) {
      return element.subscriptionType.lessonsCount;
    } else if (lessonsLeft < 0) {
      return 0;
    }

    return Math.round(lessonsLeft);
  }
}
