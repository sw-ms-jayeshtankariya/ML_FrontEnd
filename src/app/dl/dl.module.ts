import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyProjectsComponent } from './myprojects/myprojects.component';
import { DLComponent } from './dl.component';
import {
  MatTabsModule, MatSidenavModule, MatCheckboxModule,
  MatFormFieldModule, MatButtonModule, MatCard, MatCardModule, MatStepperModule,
  MatToolbarModule, MatSelectModule, MatSnackBarModule, MatSliderModule, GestureConfig, MatInputModule
} from '@angular/material';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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
import { D3NEComponent } from '../d3ne/d3ne.component';
import { NgDragDropModule } from 'ng-drag-drop';
import { CommonModule } from '@angular/common';
import { DLRoutingModule } from './dl.routing.module';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

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
    ResultsComponent,
    D3NEComponent
  ],
  imports: [
    CommonModule,
    HttpModule,
    DLRoutingModule,
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
    MatSliderModule,
    MatInputModule,
    SharedModule,
    NgDragDropModule.forRoot()
  ],
  providers: [
    { provide: MatDialogRef, useValue: {} },
    { provide: MAT_DIALOG_DATA, useValue: []},
    {  provide: HAMMER_GESTURE_CONFIG, useClass: GestureConfig  }
  ]
})
export class DLModule { }
