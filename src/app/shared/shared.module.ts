import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './settings/settings.component';
import { BreadcrumbComponent } from './breadcrumb.component';
import { PageNotFoundComponent } from './404/404.component';
const routes: Routes = [
  { path: 'settings', component: SettingsComponent },
  { path: 'pagenotfound', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    SettingsComponent,
    BreadcrumbComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  exports: [BreadcrumbComponent]
})
export class SharedModule { }
