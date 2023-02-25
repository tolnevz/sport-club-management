import { SubscriptionType } from './../../../../core/models/subscription-type.model';
import { takeUntil } from 'rxjs/operators';
import { MockService } from './../../../../core/services/mock.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Section } from './../../../../core/models/section.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-subscription-type-detail',
  templateUrl: './subscription-type-detail.component.html',
  styleUrls: ['./subscription-type-detail.component.scss'],
})
export class SubscriptionTypeDetailComponent implements OnInit, OnDestroy {
  id = this._activeRoute.snapshot.params.id;
  subscriptionTypeForm: FormGroup = new FormGroup({
    id: new FormControl(null),
    name: new FormControl('', Validators.required),
    section: new FormControl(null, Validators.required),
    endDate: new FormControl(null, Validators.required),
    lessonsCount: new FormControl(null, Validators.required),
    price: new FormControl(null, Validators.required),
    isActive: new FormControl(false),
  });
  subscriptionType: SubscriptionType | null = null;
  selectedSection!: Section;
  sections!: Section[];

  readonly entity = 'subscription-type';
  readonly sectionEntity = 'sections';
  protected destroy$: Subject<boolean> = new Subject();

  constructor(
    private _activeRoute: ActivatedRoute,
    private mockService: MockService,
    private messageService: MessageService,
    private _router: Router,
  ) {}

  ngOnInit(): void {
    this.getSections().subscribe((data) => {
      this.sections = data.list;
    });

    this._activeRoute.url.subscribe((res) => {
      if (res[0].path) {
        const sessionId = this._activeRoute.snapshot.params.id;
        this.mockService
          .findById(this.entity, +sessionId)
          .pipe(takeUntil(this.destroy$))
          .subscribe((data: SubscriptionType) => {
            this.subscriptionType = data;
            this.subscriptionTypeForm.patchValue({
              id: this.subscriptionType.id,
              name: this.subscriptionType.name,
              section: this.subscriptionType.section,
              endDate: new Date(this.subscriptionType.endDate),
              lessonsCount: this.subscriptionType.lessonsCount,
              price: this.subscriptionType.price,
              isActive: this.subscriptionType.isActive,
            });
          });
      }
    });

    this.subscriptionTypeForm.valueChanges.subscribe((value) => {
      if (value.endDate < new Date()) {
        this.subscriptionTypeForm.controls.isActive.setValue(false, { emitEvent: false });
        this.subscriptionTypeForm.controls.isActive.disable({ emitEvent: false });
      } else {
        this.subscriptionTypeForm.controls.isActive.enable({ emitEvent: false });
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  saveSubscriptionType() {
    this.messageService.add({ severity: 'success', summary: 'Record saved' });
    this._router.navigate(['..'], { relativeTo: this._activeRoute });
  }

  private getSections() {
    return this.mockService.getMockData(this.sectionEntity).pipe(takeUntil(this.destroy$));
  }
}
