import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';

import { SharedModule } from './../../../shared/shared.module';
import { AppCommonModule } from './../../../app.common.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientSubscriptionRoutingModule } from './client-subscription-routing.module';
import { ClientSubscriptionComponent } from './client-subscription.component';
import { ClientSubscriptionDetailComponent } from './client-subscription-detail/client-subscription-detail.component';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { PublicModule } from '../../public.module';

@NgModule({
  declarations: [ClientSubscriptionComponent, ClientSubscriptionDetailComponent],
  imports: [
    CommonModule,
    ClientSubscriptionRoutingModule,
    AppCommonModule,
    SharedModule,
    PublicModule,
    TableModule,
    CalendarModule,
    DropdownModule,
    CardModule,
  ],
  providers: [DynamicDialogRef, DynamicDialogConfig],
})
export class ClientSubscriptionModule {}
