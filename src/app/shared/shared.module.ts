import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './settings/settings.component';
import { BreadcrumbComponent } from './breadcrumb.component';
const routes: Routes = [
  { path: 'settings', component: SettingsComponent },
];

@NgModule({
  declarations: [
    SettingsComponent,
    BreadcrumbComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  exports: [BreadcrumbComponent]
})
export class SharedModule { }
