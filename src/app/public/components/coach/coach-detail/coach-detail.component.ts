import { Section } from './../../../../core/models/section.model';
import { takeUntil } from 'rxjs/operators';
import { MockService } from './../../../../core/services/mock.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Coach } from './../../../../core/models/coach.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  templateUrl: './coach-detail.component.html',
  styleUrls: ['./coach-detail.component.scss'],
})
export class CoachDetailComponent implements OnInit, OnDestroy {
  id = this._activeRoute.snapshot.params.id;
  coachForm: FormGroup = new FormGroup({
    id: new FormControl(null),
    fio: new FormControl('', Validators.required),
    section: new FormControl(null, Validators.required),
  });
  coach: Coach | null = null;
  selectedSection!: Section;
  sections!: Section[];

  readonly entity = 'coaches';
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
      console.log(data);
      this.sections = data.list;
    });

    this._activeRoute.url.subscribe((res) => {
      if (res[0].path) {
        const sessionId = this._activeRoute.snapshot.params.id;
        this.mockService
          .findById(this.entity, +sessionId)
          .pipe(takeUntil(this.destroy$))
          .subscribe((data: Coach) => {
            this.coach = data;
            this.coachForm.patchValue({
              id: this.coach.id,
              fio: this.coach.fio,
              section: this.coach.section,
            });
          });
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  saveCoach() {
    this.messageService.add({severity:'success', summary:'Record saved'});
    this._router.navigate(['..'], {relativeTo: this._activeRoute});
  }

  private getSections() {
    return this.mockService.getMockData(this.sectionEntity).pipe(takeUntil(this.destroy$));
  }
}
