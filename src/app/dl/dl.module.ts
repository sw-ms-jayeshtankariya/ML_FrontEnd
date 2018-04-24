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
import { SettingsComponent } from '../shared/settings/settings.component';
import { DataTablesModule } from 'angular-datatables';
import { AddEditProjectComponent } from './addeditproject/addeditproject.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddeditprojectdialogComponent } from './addeditprojectdialog/addeditprojectdialog.component';
const routes: Routes = [
  {
    path: 'dl', component: DLComponent, children: [
      {
        path: 'myprojects', component: MyProjectsComponent, data: {
          breadcrumb: 'My Projects'
        },children:[{
          path: 'save/:id', component: AddEditProjectComponent, data: {
            breadcrumb: 'Save Project'
          }
        }]
      },
      {
        path: 'settings', component: SettingsComponent, data: {
          breadcrumb: 'Settings'
        }
      }
    ]
  }
];

@NgModule({
  entryComponents:[AddeditprojectdialogComponent],
  declarations: [
    DLComponent,
    MyProjectsComponent,
    AddEditProjectComponent,
    AddeditprojectdialogComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forChild(routes),
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule,
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
