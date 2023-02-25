import { Component, OnInit, OnDestroy } from '@angular/core';
import { MessageService } from 'primeng/api';
import { fromEvent, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { CommonService } from '../../../core/services/common.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  providers: [MessageService],
})
export class LayoutComponent implements OnInit, OnDestroy {
  display = true;
  protected destroy$: Subject<boolean> = new Subject();

  constructor(public commonService: CommonService) {}

  isShowSidebar($event: boolean) {
    this.display = $event;
  }

  ngOnInit(): void {
    if (window.innerWidth <= 768) {
      this.display = false;
      this.commonService.isMobile$.next(true);
    } else {
      this.display = true;
      this.commonService.isMobile$.next(false);
    }

    fromEvent(window, 'resize')
      .pipe(
        map((res) => {
          const event = (<Window>res.target).innerWidth;

          if (event <= 768) {
            this.display = false;
            this.commonService.isMobile$.next(true);
          } else {
            this.display = true;
            this.commonService.isMobile$.next(false);
          }
        }),
        takeUntil(this.destroy$),
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
