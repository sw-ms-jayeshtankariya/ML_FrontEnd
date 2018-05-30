import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SettingsComponent } from './settings/settings.component';
import { PageNotFoundComponent } from './404/404.component';
import { LogoutComponent } from './logout.component';

const routes: Routes = [
    { path: 'settings', component: SettingsComponent },
    { path: 'pagenotfound', component: PageNotFoundComponent },
    { path: 'logout', component: LogoutComponent }
];
@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class SharedRoutingModule { }
