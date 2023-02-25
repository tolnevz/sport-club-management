import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Section } from './../../../../core/models/section.model';
import { MockService } from './../../../../core/services/mock.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  templateUrl: './section-detail.component.html',
  styleUrls: ['./section-detail.component.scss'],
})
export class SectionDetailComponent implements OnInit, OnDestroy {
  id = this._activeRoute.snapshot.params.id;
  sectionForm: FormGroup = new FormGroup({
    id: new FormControl(null),
    name: new FormControl('', Validators.required),
    externalId: new FormControl('', Validators.required),
  });
  section: Section | null = null;

  readonly entity = 'sections';
  protected destroy$: Subject<boolean> = new Subject();

  constructor(
    private _activeRoute: ActivatedRoute,
    private mockService: MockService,
    private messageService: MessageService,
    private _router: Router,
  ) {}

  ngOnInit(): void {
    this._activeRoute.url.subscribe((res) => {
      if (res[0].path) {
        const sessionId = this._activeRoute.snapshot.params.id;
        this.mockService
          .findById(this.entity, +sessionId)
          .pipe(takeUntil(this.destroy$))
          .subscribe((data: Section) => {
            this.section = data;
            this.sectionForm.patchValue({
              id: this.section.id,
              name: this.section.name,
              externalId: this.section.externalId,
            });
          });
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  saveSection() {
    this.messageService.add({ severity: 'success', summary: 'Record saved' });
    this._router.navigate(['..'], { relativeTo: this._activeRoute });
  }
}
