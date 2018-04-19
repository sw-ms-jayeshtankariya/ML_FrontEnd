import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { DataPreparationComponent } from './data-preparation/data.preparation.component';
import { ModelsComponent } from './models/models.component';
import { UsersComponent } from './users/users.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { SalesInformationComponent } from './data-preparation/salesinfo.component';
import { TableSelectionComponent } from './data-preparation/table.selection.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import {MatTabsModule,MatSidenavModule,MatCheckboxModule,MatDialogModule,
    MatFormFieldModule, MatButtonModule, MatCard, MatCardModule,MatStepperModule,
    MatToolbarModule, MatSelectModule,MatSnackBarModule} from '@angular/material';
import { SSnackBar } from '../_matProviders/mat.snack';
import { MLComponent } from './ml.component';
import { AppHeaderComponent } from '../_layouts/app-header/app.header.component';
import { SiteFooterComponent } from '../_layouts/site-footer/site.footer.component';
const routes: Routes = [
    { path: 'ml', component: MLComponent, children:[
        { path: 'datapreparation', component: DataPreparationComponent, data:{
            breadcrumb:'Data Preparation'
        } },
        { path: 'models', component: ModelsComponent, data:{
            breadcrumb:'Models'
        } },
        { path: 'users', component: UsersComponent, data:{
            breadcrumb:'Users'
        } },
        { path: 'notifications', component: NotificationsComponent, data:{
            breadcrumb:'Notifications'
        } }
    ]},    
];

@NgModule({
    entryComponents: [SalesInformationComponent, TableSelectionComponent],
    declarations: [
        MLComponent,
        AppHeaderComponent,
        SiteFooterComponent,
        DataPreparationComponent,
        ModelsComponent,
        UsersComponent,
        NotificationsComponent,
        SalesInformationComponent,
        TableSelectionComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
        FormsModule,
        HttpModule,
        ReactiveFormsModule,
        DataTablesModule,
        BrowserModule,
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
        MatSnackBarModule
    ],
    providers: [SSnackBar]
})
export class MLModule { }
