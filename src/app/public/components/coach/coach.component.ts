import { CommonService } from '../../../core/services/common.service';
import { takeUntil } from 'rxjs/operators';
import { MockService } from '../../../core/services/mock.service';
import { Subject } from 'rxjs';
import { INDEXED_COLUMNS } from './coach-columns';
import { Column } from '../../../core/models/column.model';
import { Coach } from '../../../core/models/coach.model';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-coaches',
  templateUrl: './coach.component.html',
  styleUrls: ['./coach.component.scss'],
})
export class CoachComponent implements OnInit, OnDestroy {
  coaches: Coach[] = [];
  cols: Column[] = INDEXED_COLUMNS;
  rowCount!: number;

  readonly entity = 'coaches';
  protected destroy$: Subject<boolean> = new Subject();

  constructor(private mockService: MockService, private commonService: CommonService) {}

  ngOnInit(): void {
    this.commonService.isLoading$.next(true);
    this.mockService
      .getMockData(this.entity)
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        this.coaches = data.list;
        this.rowCount = data.rowCount;
        this.commonService.isLoading$.next(false);
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
    this.commonService.isLoading$.next(false);
    this.commonService.isLoading$.complete();
  }
}
