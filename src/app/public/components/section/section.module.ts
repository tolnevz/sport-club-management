import { SharedModule } from '../../../shared/shared.module';
import { AppCommonModule } from '../../../app.common.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionRoutingModule } from './section-routing.module';
import { SectionComponent } from './section.component';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { SectionDetailComponent } from './section-detail/section-detail.component';
import { PublicModule } from '../../public.module';

@NgModule({
  declarations: [SectionComponent, SectionDetailComponent],
  imports: [
    CommonModule,
    SectionRoutingModule,
    AppCommonModule,
    SharedModule,
    PublicModule,
    TableModule,
    CardModule,
    InputTextModule,
    ButtonModule,
  ],
})
export class SectionModule {}
