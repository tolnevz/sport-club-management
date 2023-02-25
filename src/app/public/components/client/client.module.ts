import { InputNumberModule } from 'primeng/inputnumber';
import { CalendarModule } from 'primeng/calendar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { InputMaskModule } from 'primeng/inputmask';
import { AccordionModule } from 'primeng/accordion';
import { DividerModule } from 'primeng/divider';

import { SharedModule } from './../../../shared/shared.module';
import { AppCommonModule } from './../../../app.common.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';
import { ClientDetailComponent } from './client-detail/client-detail.component';
import { PublicModule } from '../../public.module';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [ClientComponent, ClientDetailComponent],
  imports: [
    CommonModule,
    ClientRoutingModule,
    AppCommonModule,
    SharedModule,
    PublicModule,
    TableModule,
    CardModule,
    InputTextModule,
    ButtonModule,
    CalendarModule,
    InputNumberModule,
    InputMaskModule,
    AccordionModule,
    DividerModule,
  ],
})
export class ClientModule {}
