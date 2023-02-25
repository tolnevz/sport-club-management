import { takeUntil } from 'rxjs/operators';
import { MockService } from './../../../../core/services/mock.service';
import { SubscriptionType } from './../../../../core/models/subscription-type.model';
import { Client } from './../../../../core/models/client.model';
import { forkJoin, Subject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Section } from './../../../../core/models/section.model';
import { ClientSubscription } from './../../../../core/models/client-subscription.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { DynamicDialogRef, DynamicDialogConfig, DialogService } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';
import { SubscriptionRenewal } from '../../../../core/models/subscription-renewal.model';
import { Column } from '../../../../core/models/column.model';
import { INDEXED_COLUMNS_INNER_TABLE } from '../../subscription-renewal/subscription-renewal-columns';
import { SubscriptionRenewalDetailComponent } from '../../subscription-renewal/subscription-renewal-detail/subscription-renewal-detail.component';
import { CommonService } from '../../../../core/services/common.service';

@Component({
  selector: 'app-client-subscription-detail',
  templateUrl: './client-subscription-detail.component.html',
  styleUrls: ['./client-subscription-detail.component.scss'],
  providers: [DialogService],
})
export class ClientSubscriptionDetailComponent implements OnInit, OnDestroy {
  clientSubscriptionForm: FormGroup = new FormGroup({
    id: new FormControl(null),
    client: new FormControl({value: null, disabled: this.config.data?.id}, Validators.required),
    subscriptionType: new FormControl(null, Validators.required),
    section: new FormControl(null, Validators.required),
    startDate: new FormControl(null, Validators.required),
  });
  clientSubscription: ClientSubscription | null = null;

  subscriptionRenewals: SubscriptionRenewal[] = [];
  cols: Column[] = INDEXED_COLUMNS_INNER_TABLE;
  rowCount!: number;
  first = 0;
  rows = 10;

  selectedSection!: Section;
  sections!: Section[];

  selectedClient!: Client;
  clients!: Client[];

  selectedSubscriptionType!: SubscriptionType;
  subscriptionTypes!: SubscriptionType[];

  readonly entity = 'client-subscription';
  readonly sectionEntity = 'sections';
  readonly subscriptionTypeEntity = 'subscription-type';
  readonly clientEntity = 'clients';
  readonly subscriptionRenewalEntity = 'subscription-renewal';

  protected destroy$: Subject<boolean> = new Subject();

  get sessionId() {
    if (this.config.data?.id) {
      return this.config.data?.id;
    } else {
      return this._activeRoute.snapshot.params.id;
    }
  }

  constructor(
    private _activeRoute: ActivatedRoute,
    private mockService: MockService,
    private commonService: CommonService,
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private messageService: MessageService,
    private _router: Router,
    public dialogService: DialogService,
  ) {}

  ngOnInit(): void {

    forkJoin({ clients: this.getClients(), subscriptionTypes: this.getSubscriptionTypes(), sections: this.getSections() }).subscribe(
      (data) => {
        this.clients = data.clients.list;
        this.subscriptionTypes = data.subscriptionTypes.list;
        this.sections = data.sections.list;
      },
    );

    this._activeRoute.url.subscribe((res) => {
      if (res[0].path) {
        this.mockService
          .findById(this.entity, +this.sessionId)
          .pipe(takeUntil(this.destroy$))
          .subscribe((data: ClientSubscription) => {
            this.clientSubscription = data;
            this.clientSubscriptionForm.patchValue({
              id: this.clientSubscription.id,
              client: this.clientSubscription.client,
              subscriptionType: this.clientSubscription.subscriptionType,
              section: this.clientSubscription.section,
              startDate: new Date(this.clientSubscription.startDate),
            });
          });
      }
    });

    this.mockService
      .listById(this.subscriptionRenewalEntity, +this.sessionId)
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        this.subscriptionRenewals = data;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  saveClientSubscription() {
    this.messageService.add({ severity: 'success', summary: 'Record saved' });
    if (this.config.data?.id) {
      this.ref.close();
      return;
    }
    this._router.navigate(['..'], { relativeTo: this._activeRoute });
  }

  showModal(id: number) {
    this.dialogService.open(SubscriptionRenewalDetailComponent, {
      data: { id },
      header: 'More info',
      width: this.commonService.isMobile$.value ? '90%' : '50%',
      baseZIndex: 888,
    });
  }

  private getSections() {
    return this.mockService.getMockData(this.sectionEntity).pipe(takeUntil(this.destroy$));
  }

  private getClients() {
    return this.mockService.getMockData(this.clientEntity).pipe(takeUntil(this.destroy$));
  }

  private getSubscriptionTypes() {
    return this.mockService.getMockData(this.subscriptionTypeEntity).pipe(takeUntil(this.destroy$));
  }
}
