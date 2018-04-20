import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyProjectsComponent } from './myprojects/myprojects.component';
import { DLComponent } from './dl.component';
import {
  MatTabsModule, MatSidenavModule, MatCheckboxModule, MatDialogModule,
  MatFormFieldModule, MatButtonModule, MatCard, MatCardModule, MatStepperModule,
  MatToolbarModule, MatSelectModule, MatSnackBarModule
} from '@angular/material';
import { BreadcrumbComponent } from '../shared/breadcrumb.component';
import { SharedModule } from '../shared/shared.module';
const routes: Routes = [
  {
    path: 'dl', component: DLComponent, children: [
      { path: 'myprojects', component: MyProjectsComponent }]
  }
];

@NgModule({
  declarations: [
    DLComponent,
    MyProjectsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    MatTabsModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatStepperModule,
    MatToolbarModule,
    MatSelectModule,
    MatSnackBarModule,
    SharedModule
  ],
  providers: []
})
export class DLModule { }