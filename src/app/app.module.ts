
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ScriptHackComponent } from './script.hack.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';
import { SSnackBar } from './_matProviders/mat.snack';
import { MLModule } from './ml/ml.module';
import { DLModule } from './dl/dl.module';
import { RegistrationModule } from './registration/registration.module';
import { SharedModule } from './shared/shared.module';
import { LoginComponent } from './registration/login/login.component';
import { RegistrationComponent } from './registration/registration.component';
const routes: Routes = [    
  {path:'', redirectTo:'/registration/login',pathMatch:'full'},
  {path:'**', redirectTo:'/pagenotfound'},
  { path: 'ml', loadChildren: './ml/ml.module' },  
  { path: 'dl', loadChildren: './dl/dl.module' },  
  { path: 'login', loadChildren: './registration/registration.module' },  
];  
@NgModule({
  declarations: [
    ScriptHackComponent,
    AppComponent
  ],
  imports: [
    // routing,
    RouterModule.forRoot(routes),
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    SharedModule,
    MLModule,
    DLModule,
    RegistrationModule    
  ],
  providers: [SSnackBar],
  bootstrap: [AppComponent]
})
export class AppModule { }
