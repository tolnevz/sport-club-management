import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { SharedModule } from './../../../shared/shared.module';
import { AppCommonModule } from './../../../app.common.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubscriptionRenewalRoutingModule } from './subscription-renewal-routing.module';
import { SubscriptionRenewalComponent } from './subscription-renewal.component';
import { SubscriptionRenewalDetailComponent } from './subscription-renewal-detail/subscription-renewal-detail.component';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { PublicModule } from '../../public.module';

@NgModule({
  declarations: [SubscriptionRenewalComponent, SubscriptionRenewalDetailComponent],
  imports: [
    CommonModule,
    SubscriptionRenewalRoutingModule,
    AppCommonModule,
    SharedModule,
    PublicModule,
    TableModule,
    CardModule,
    InputTextModule,
    ButtonModule,
    DropdownModule,
    CalendarModule,
  ],
  providers: [DynamicDialogRef, DynamicDialogConfig],
})
export class SubscriptionRenewalModule {}
