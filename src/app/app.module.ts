
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ScriptHackComponent } from './script.hack.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';
import { SSnackBar } from './_matProviders/mat.snack';
import { SharedModule } from './shared/shared.module';
import { LoginComponent } from './registration/login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AppRoutingModule } from './app.routing.module';
import { MatSliderModule } from '@angular/material';
@NgModule({
  declarations: [
    ScriptHackComponent,
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    MatSliderModule,
    SharedModule
  ],
  providers: [SSnackBar],
  bootstrap: [AppComponent]
})
export class AppModule { }
