import { CommonService } from '../../../core/services/common.service';
import { INDEXED_COLUMNS } from './section-columns';
import { Column } from '../../../core/models/column.model';
import { MockService } from '../../../core/services/mock.service';
import { Section } from '../../../core/models/section.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-sections',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit, OnDestroy {
  sections: Section[] = [];
  cols: Column[] = INDEXED_COLUMNS;
  rowCount!: number;

  readonly entity = 'sections';
  protected destroy$: Subject<boolean> = new Subject();

  constructor(private mockService: MockService, private commonService: CommonService) { }

  ngOnInit(): void {
    this.commonService.isLoading$.next(true);
    this.mockService.getMockData(this.entity).pipe(
      takeUntil(this.destroy$)
    ).subscribe(data => {
      setTimeout(() => {
        this.sections = data.list;
        this.rowCount = data.rowCount;
        this.commonService.isLoading$.next(false);
      }, 200);
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
    this.commonService.isLoading$.next(false);
    this.commonService.isLoading$.complete();
  }

}
