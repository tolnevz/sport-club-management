import { ButtonModule } from 'primeng/button';
import { SharedModule } from '../../../shared/shared.module';
import { AppCommonModule } from '../../../app.common.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoachesRoutingModule } from './coach-routing.module';
import { CoachComponent } from './coach.component';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { CoachDetailComponent } from './coach-detail/coach-detail.component';
import { PublicModule } from '../../public.module';

@NgModule({
  declarations: [CoachComponent, CoachDetailComponent],
  imports: [
    CommonModule,
    CoachesRoutingModule,
    AppCommonModule,
    TableModule,
    SharedModule,
    PublicModule,
    DropdownModule,
    CardModule,
    InputTextModule,
    ButtonModule,
  ],
})
export class CoachModule {}
