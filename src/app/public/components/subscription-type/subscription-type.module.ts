import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import {InputNumberModule} from 'primeng/inputnumber';
import {CheckboxModule} from 'primeng/checkbox';
import { SharedModule } from './../../../shared/shared.module';
import { AppCommonModule } from './../../../app.common.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubscriptionTypeRoutingModule } from './subscription-type-routing.module';
import { SubscriptionTypeComponent } from './subscription-type.component';
import { SubscriptionTypeDetailComponent } from './subscription-type-detail/subscription-type-detail.component';
import { PublicModule } from '../../public.module';

@NgModule({
  declarations: [SubscriptionTypeComponent, SubscriptionTypeDetailComponent],
  imports: [
    CommonModule,
    SubscriptionTypeRoutingModule,
    AppCommonModule,
    SharedModule,
    PublicModule,
    TableModule,
    CardModule,
    InputTextModule,
    ButtonModule,
    DropdownModule,
    CalendarModule,
    InputNumberModule,
    CheckboxModule
  ],
})
export class SubscriptionTypeModule {}
