import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { DataPreparationComponent } from './data-preparation/data.preparation.component';
import { ModelsComponent } from './models/models.component';
import { UsersComponent } from './users/users.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { TableSelectionComponent } from './data-preparation/table.selection.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import {
    MatTabsModule, MatSidenavModule, MatCheckboxModule, MatDialogModule,
    MatFormFieldModule, MatButtonModule, MatCard, MatCardModule, MatStepperModule,
    MatToolbarModule, MatSelectModule, MatSnackBarModule
} from '@angular/material';
import { SSnackBar } from '../_matProviders/mat.snack';
import { MLComponent } from './ml.component';
import { SharedModule } from '../shared/shared.module';
import { SaveUserComponent } from './users/user.save.component';
import { ConfirmationModalComponent } from '../shared/confirmationmodal.component';
import { SettingsComponent } from '../shared/settings/settings.component';
import { ReviewDataComponent } from './data-preparation/review-data/review-data.component';
import { CleanDataComponent } from './data-preparation/clean-data/clean-data.component';
import { PreparedDataComponent } from './data-preparation/prepared-data/prepared-data.component';
import { SalesInfoComponent } from './data-preparation/review-data/sales-info/sales-info.component';
import { DPSharedService } from './data-preparation/data.preparation.shared';
const routes: Routes = [
    {
        path: 'ml', component: MLComponent, children: [
            {
                path: 'datapreparation', component: DataPreparationComponent, data: {
                    breadcrumb: 'Data Preparation'
                }
                , children: [
                    { path: 'reviewdata', component: ReviewDataComponent, data: { breadcrumb: 'Review Data' },outlet:'rdata'},
                    {
                        path: 'cleandata', component: CleanDataComponent, data: {
                            breadcrumb: 'Clean Data'
                        },outlet:'cdata'
                    },{
                        path: 'prepareddata', component: PreparedDataComponent, data: {
                            breadcrumb: 'Prepared Data'
                        },outlet:'pdata'
                    }]
            },
            {
                path: 'models', component: ModelsComponent, data: {
                    breadcrumb: 'Models'
                }
            },
            {
                path: 'users', component: UsersComponent, data: {
                    breadcrumb: 'Users'
                }
            },
            {
                path: 'notifications', component: NotificationsComponent, data: {
                    breadcrumb: 'Notifications'
                }
            },
            {
                path: 'user/:id',
                component: SaveUserComponent,
                data: {
                    breadcrumb: 'Save User'
                }
            },
            {
                path: 'settings', component: SettingsComponent, data: {
                    breadcrumb: 'Settings'
                }
            }
        ]
    },
    {path:'ml', redirectTo:'/datapreparation',pathMatch:'full'}
];

@NgModule({
    entryComponents: [SalesInfoComponent, TableSelectionComponent,ConfirmationModalComponent],
    declarations: [
        ConfirmationModalComponent,
        MLComponent,
        DataPreparationComponent,
        ModelsComponent,
        UsersComponent,
        NotificationsComponent,
        TableSelectionComponent,
        SaveUserComponent,
        ReviewDataComponent,
        CleanDataComponent,
        PreparedDataComponent,
        SalesInfoComponent
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
        MatSnackBarModule,
        SharedModule
    ],
    providers: [SSnackBar,DPSharedService]
})
export class MLModule { }
