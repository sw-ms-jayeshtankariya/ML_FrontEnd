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
import { AddeditprojectdialogComponent } from './addeditproject/addeditprojectdialog.component';
import { ConfigureProjectComponent } from './configure-project/configure-project.component';
import { FtpconfigComponent } from './configure-project/ftpconfig/ftpconfig.component';
import { DatareviewComponent } from './configure-project/datareview/datareview.component';
import { ModeldesignComponent } from './configure-project/modeldesign/modeldesign.component';
import { HyperparamComponent } from './configure-project/hyperparam/hyperparam.component';
import { TrainingComponent } from './configure-project/training/training.component';
import { ResultsComponent } from './configure-project/results/results.component';
const routes: Routes = [
  {
    path: 'dl', component: DLComponent, children: [
      {
        path: 'myprojects', component: MyProjectsComponent, data: {
          breadcrumb: 'My Projects'
        }, children: [{
          path: 'save/:id', component: AddEditProjectComponent, data: {
            breadcrumb: 'Save Project'
          }
        }]
      },
      {
        path: 'configure-project/:id', component: ConfigureProjectComponent, data: {
          breadcrumb: 'Configure Project'
        }, children: [
        {
          path: 'ftp-config', component: FtpconfigComponent, data: {
            breadcrumb: 'FTP Configuration'
          }, outlet: 'ftpconfig'
        },
        {
          path: 'data-review', component: DatareviewComponent, data: {
            breadcrumb: 'Review FTP Data'
          }, outlet: 'datareview'
        },
        {
          path: 'model-design', component: ModeldesignComponent, data: {
            breadcrumb: 'Design Model'
          }, outlet: 'modeldesign'
        },
        {
          path: 'hyper-param', component: HyperparamComponent, data: {
            breadcrumb: 'Hyper Parameters'
          }, outlet: 'hyperparam'
        },
        {
          path: 'ting', component: TrainingComponent, data: {
            breadcrumb: 'Training'
          }, outlet: 'training'
        },
        {
          path: 'rsults', component: ResultsComponent, data: {
            breadcrumb: 'Results'
          }, outlet: 'results'
        }
      ]
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
  entryComponents: [AddeditprojectdialogComponent],
  declarations: [
    DLComponent,
    MyProjectsComponent,
    AddEditProjectComponent,
    AddeditprojectdialogComponent,
    ConfigureProjectComponent,
    FtpconfigComponent,
    DatareviewComponent,
    ModeldesignComponent,
    HyperparamComponent,
    TrainingComponent,
    ResultsComponent
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
