import { TableModule } from 'primeng/table';
import { RouterModule } from '@angular/router';
import { AppCommonModule } from './../app.common.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { MenuComponent } from './components/layout/menu/menu.component';
import { SidebarModule } from 'primeng/sidebar';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { SharedTableComponent } from './components/shared-table/shared-table.component';
import { StatusPipe } from './pipes/status.pipe';
import { ToastModule } from 'primeng/toast';
import {MenuModule} from 'primeng/menu';

@NgModule({
  declarations: [LayoutComponent, HeaderComponent, MenuComponent, SharedTableComponent, StatusPipe],
  imports: [
    CommonModule,
    AppCommonModule,
    SidebarModule,
    RouterModule,
    PanelMenuModule,
    MenubarModule,
    MenuModule,
    ButtonModule,
    InputTextModule,
    TableModule,
    DynamicDialogModule,
    ToastModule,
  ],
  exports: [LayoutComponent, HeaderComponent, MenuComponent, SharedTableComponent, StatusPipe],
})
export class SharedModule {}
