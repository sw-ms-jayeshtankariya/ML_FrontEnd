import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
    { path: '', redirectTo: '/registration', pathMatch: 'full' },
    // {path:'**', redirectTo:'/pagenotfound'},
    { path: 'ml', loadChildren: './ml/ml.module#MLModule' },
    { path: 'dl', loadChildren: './dl/dl.module#DLModule' },
    { path: 'registration', loadChildren: './registration/registration.module#RegistrationModule' }
];
@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
