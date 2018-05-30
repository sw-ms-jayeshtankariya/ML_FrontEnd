import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './settings/settings.component';
import { BreadcrumbComponent } from './breadcrumb.component';
import { PageNotFoundComponent } from './404/404.component';
import { LogoutComponent } from './logout.component';
import { LocalStorageService } from '../_services/localstorageservice.component';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared.routing.module';

@NgModule({
  declarations: [
    SettingsComponent,
    BreadcrumbComponent,
    PageNotFoundComponent,
    LogoutComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  providers: [LocalStorageService],
  exports: [BreadcrumbComponent]
})
export class SharedModule { }
