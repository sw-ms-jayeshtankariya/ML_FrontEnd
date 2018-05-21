import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './settings/settings.component';
import { BreadcrumbComponent } from './breadcrumb.component';
import { PageNotFoundComponent } from './404/404.component';
import { LogoutComponent } from './logout.component';
import { LocalStorageService } from '../_services/localstorageservice.component';
const routes: Routes = [
  { path: 'settings', component: SettingsComponent },
  { path: 'pagenotfound', component: PageNotFoundComponent },
  { path: 'logout', component: LogoutComponent }
];

@NgModule({
  declarations: [
    SettingsComponent,
    BreadcrumbComponent,
    PageNotFoundComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [LocalStorageService],
  exports: [BreadcrumbComponent]
})
export class SharedModule { }
