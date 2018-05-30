import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SettingsComponent } from '../shared/settings/settings.component';
import { SaveUserComponent } from './users/user.save.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UsersComponent } from './users/users.component';
import { ModelsComponent } from './models/models.component';
import { PreparedDataComponent } from './data-preparation/prepared-data/prepared-data.component';
import { CleanDataComponent } from './data-preparation/clean-data/clean-data.component';
import { ReviewDataComponent } from './data-preparation/review-data/review-data.component';
import { DataPreparationComponent } from './data-preparation/data.preparation.component';
import { MLComponent } from './ml.component';
const routes: Routes = [
    {
        path: '', component: MLComponent, children: [
            { path: '', component: MLComponent },
            {
                path: 'datapreparation', component: DataPreparationComponent, data: {
                    breadcrumb: 'Data Preparation'
                }
                , children: [
                    { path: 'reviewdata', component: ReviewDataComponent, data: { breadcrumb: 'Review Data' }, outlet: 'rdata' },
                    {
                        path: 'cleandata', component: CleanDataComponent, data: {
                            breadcrumb: 'Clean Data'
                        }, outlet: 'cdata'
                    }, {
                        path: 'prepareddata', component: PreparedDataComponent, data: {
                            breadcrumb: 'Prepared Data'
                        }, outlet: 'pdata'
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
    { path: 'ml', redirectTo: '/datapreparation', pathMatch: 'full' }
];
@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class MLRoutingModule { }
