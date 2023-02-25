import { takeUntil } from 'rxjs/operators';
import { MockService } from './../../../../core/services/mock.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { ClientSubscription } from './../../../../core/models/client-subscription.model';
import { SubscriptionRenewal } from './../../../../core/models/subscription-renewal.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-subscription-renewal-detail',
  templateUrl: './subscription-renewal-detail.component.html',
  styleUrls: ['./subscription-renewal-detail.component.scss'],
})
export class SubscriptionRenewalDetailComponent implements OnInit, OnDestroy {
  reasons: string[] = ['Doctor`s note', 'Discretion of the director/administrator'];

  subscriptionRenewalForm: FormGroup = new FormGroup({
    id: new FormControl(null),
    clientSubscription: new FormControl({value: null, disabled: this.config.data?.id}, Validators.required),
    reason: new FormControl(this.reasons, Validators.required),
    extensionPeriod: new FormControl(null, Validators.required),
  });

  subscriptionRenewal: SubscriptionRenewal | null = null;
  selectedClientSubscription!: ClientSubscription;
  clientSubscriptions!: ClientSubscription[];

  readonly entity = 'subscription-renewal';
  readonly sectionEntity = 'client-subscription';
  protected destroy$: Subject<boolean> = new Subject();

  constructor(
    private _activeRoute: ActivatedRoute,
    private mockService: MockService,
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private messageService: MessageService,
    private _router: Router,
  ) {}

  get sessionId() {
    if (this.config.data?.id) {
      return this.config.data?.id;
    } else {
      return this._activeRoute.snapshot.params.id;
    }
  }

  ngOnInit(): void {
    this.getClientSubscription().subscribe((data) => {
      this.clientSubscriptions = data.list;
    });

    this._activeRoute.url.subscribe((res) => {
      if (res[0].path) {
        this.mockService
          .findById(this.entity, +this.sessionId)
          .pipe(takeUntil(this.destroy$))
          .subscribe((data: SubscriptionRenewal) => {
            this.subscriptionRenewal = data;
            this.subscriptionRenewalForm.patchValue({
              id: this.subscriptionRenewal.id,
              clientSubscription: this.subscriptionRenewal.clientSubscription,
              reason: this.subscriptionRenewal.reason,
              extensionPeriod: new Date(this.subscriptionRenewal.extensionPeriod),
            });
          });
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  saveSubscriptionRenewal() {
    this.messageService.add({ severity: 'success', summary: 'Record saved' });
    if (this.config.data?.id) {
      this.ref.close();
      return;
    }
    this._router.navigate(['..'], { relativeTo: this._activeRoute });
  }

  private getClientSubscription() {
    return this.mockService.getMockData(this.sectionEntity).pipe(takeUntil(this.destroy$));
  }
}
