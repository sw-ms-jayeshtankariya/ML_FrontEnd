import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './signup/signup.component';
import { ForgetPasswordComponent } from './forgetpassword/forgetpassword.component';
import { RegistrationComponent } from './registration.component';
import { ChooseModuleComponent } from './login/choose.module';
const routes: Routes = [
    {
        path: '', component: RegistrationComponent,
        children: [
            { path: '', component: LoginComponent, pathMatch: 'full' },
            { path: 'login', component: LoginComponent },
            { path: 'signup', component: SignUpComponent },
            { path: 'forgetpassword', component: ForgetPasswordComponent },
            { path: 'choosemodule', component: ChooseModuleComponent }]
    },
];
@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class RegistrationRoutingModule { }
