import { takeUntil, map } from 'rxjs/operators';
import { MockService } from './../../../../core/services/mock.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Client } from './../../../../core/models/client.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ClientSubscription } from '../../../../core/models/client-subscription.model';
import { Column } from '../../../../core/models/column.model';
import * as moment from 'moment';
import { INDEXED_COLUMNS_INNER_TABLE } from '../../client-subscription/client-subscription-columns';
import { MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { ClientSubscriptionDetailComponent } from '../../client-subscription/client-subscription-detail/client-subscription-detail.component';
import { CommonService } from '../../../../core/services/common.service';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.scss'],
  providers: [DialogService],
})
export class ClientDetailComponent implements OnInit, OnDestroy {
  id = this._activeRoute.snapshot.params.id;
  clientForm: FormGroup = new FormGroup({
    id: new FormControl(null),
    fio: new FormControl('', Validators.required),
    dateOfBirth: new FormControl(null, Validators.required),
    phone: new FormControl(''),
    email: new FormControl(null),
    contact1_fio: new FormControl(''),
    contact1_phone: new FormControl(''),
    contact1_email: new FormControl(''),
    contact2_fio: new FormControl(''),
    contact2_phone: new FormControl(''),
    contact2_email: new FormControl(''),
  });
  client: Client | null = null;

  clientSubscriptions: ClientSubscription[] = [];
  cols: Column[] = INDEXED_COLUMNS_INNER_TABLE;
  rowCount!: number;

  first = 0;
  rows = 10;

  readonly entity = 'clients';
  readonly clientSubscriptionEntity = 'client-subscription';
  readonly entityListFor = 'client';
  protected destroy$: Subject<boolean> = new Subject();

  constructor(
    private _activeRoute: ActivatedRoute,
    private commonService: CommonService,
    private mockService: MockService,
    private messageService: MessageService,
    private _router: Router,
    public dialogService: DialogService,
  ) {}

  ngOnInit(): void {
    this._activeRoute.url.subscribe((res) => {
      if (res[0].path) {
        const sessionId = this._activeRoute.snapshot.params.id;
        this.mockService
          .findById(this.entity, +sessionId)
          .pipe(takeUntil(this.destroy$))
          .subscribe((data: Client) => {
            this.client = data;
            this.clientForm.patchValue({
              id: this.client.id,
              fio: this.client.fio,
              dateOfBirth: new Date(this.client.dateOfBirth),
              phone: this.client.phone,
              email: this.client.email,
              contact1_fio: this.client.contact1?.fio,
              contact1_phone: this.client.contact1?.phone,
              contact1_email: this.client.contact1?.email,
              contact2_fio: this.client.contact2?.fio,
              contact2_phone: this.client.contact2?.phone,
              contact2_email: this.client.contact2?.email,
            });
          });
      }
    });

    this.mockService
      .listById(this.clientSubscriptionEntity, +this.id, this.entityListFor)
      .pipe(
        map((data: ClientSubscription[]) => {
          data.forEach((el) => {
            el.lessonsLeft = this.calculateCountOfLeftLessons(el);
          });
          return data;
        }),
        takeUntil(this.destroy$),
      )
      .subscribe((data) => {
        this.clientSubscriptions = data;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  saveClient() {
    this.messageService.add({ severity: 'success', summary: 'Record saved' });
    this._router.navigate(['..'], { relativeTo: this._activeRoute });
  }

  showModal(id: number) {
    this.dialogService.open(ClientSubscriptionDetailComponent, {
      data: { id },
      header: 'More info',
      width: this.commonService.isMobile$.value ? '90%' : '50%',
    });
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
