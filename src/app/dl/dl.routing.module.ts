import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SettingsComponent } from '../shared/settings/settings.component';
import { ResultsComponent } from './configure-project/results/results.component';
import { TrainingComponent } from './configure-project/training/training.component';
import { HyperparamComponent } from './configure-project/hyperparam/hyperparam.component';
import { ModeldesignComponent } from './configure-project/modeldesign/modeldesign.component';
import { DatareviewComponent } from './configure-project/datareview/datareview.component';
import { FtpconfigComponent } from './configure-project/ftpconfig/ftpconfig.component';
import { ConfigureProjectComponent } from './configure-project/configure-project.component';
import { AddEditProjectComponent } from './addeditproject/addeditproject.component';
import { MyProjectsComponent } from './myprojects/myprojects.component';
import { DLComponent } from './dl.component';
const routes: Routes = [
    {
        path: '', component: DLComponent, children: [
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
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class DLRoutingModule { }
