import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './signup/signup.component';
import { ForgetPasswordComponent } from './forgetpassword/forgetpassword.component';
import { RegistrationComponent } from './registration.component';
import { ChooseModuleComponent } from './login/choose.module';
import { RegistrationRoutingModule } from './registration.routing.module';

@NgModule({
  declarations: [
    ChooseModuleComponent,
    RegistrationComponent,
    LoginComponent,
    SignUpComponent,
    ForgetPasswordComponent
  ],
  imports: [
    RegistrationRoutingModule
  ],
  providers: []
})
export class RegistrationModule { }
