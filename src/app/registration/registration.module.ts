import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './signup/signup.component';
import { ForgetPasswordComponent } from './forgetpassword/forgetpassword.component';
import { RegistrationComponent } from './registration.component';
import { ChooseModuleComponent } from './login/choose.module';
const routes: Routes = [
  {
    path: 'registration', component: RegistrationComponent,
    children: [
      { path: '', component: LoginComponent },
      { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignUpComponent },
    { path: 'forgetpassword', component: ForgetPasswordComponent },
    { path: 'choosemodule', component: ChooseModuleComponent }]
  },
];

@NgModule({
  declarations: [
    ChooseModuleComponent,
    RegistrationComponent,
    LoginComponent,
    SignUpComponent,
    ForgetPasswordComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: []
})
export class RegistrationModule { }