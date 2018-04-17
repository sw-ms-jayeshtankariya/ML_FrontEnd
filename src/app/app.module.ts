import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { routes, routing } from '../app.routing';
import { LoginComponent } from '../login/login.component';
import { SiteLayoutComponent } from './_layouts/site-layout/site.layout.component';
import { SiteHeaderComponent } from './_layouts/site-header/site.header.component';
import { SiteFooterComponent } from './_layouts/site-footer/site.footer.component';
import { AppLayoutComponent } from './_layouts/app-layout/app.layout.component';
import { DataPreparationComponent } from './data-preparation/data.preparation.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { SettingsComponent } from './settings/settings.component';
import { UsersComponent } from './users/users.component';
import { ModelsComponent } from './models/models.component';
import { BreadcrumbComponent } from './breadcrumb.component';
import { SignUpComponent } from '../signup/signup.component';
import { ForgetPasswordComponent } from '../forgetpassword/forgetpassword.component';
import { AppHeaderComponent } from './_layouts/app-header/app.header.component';
import { ScriptHackComponent } from './script.hack.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { Select2Module } from 'ng2-select2';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';
import {MatTabsModule,MatSidenavModule,MatCheckboxModule,MatDialogModule,
  MatFormFieldModule, MatButtonModule, MatCard, MatCardModule,MatStepperModule,MatToolbarModule, MatSelectModule} from '@angular/material';
import { SalesInformationComponent } from './data-preparation/salesinfo.component';
import { SaveUserComponent } from './users/user.save.component';

@NgModule({
  entryComponents:[SalesInformationComponent],
  declarations: [
    ScriptHackComponent,
    SignUpComponent,
    ForgetPasswordComponent,
    BreadcrumbComponent,
    AppComponent,
    LoginComponent,
    AppLayoutComponent,
    AppHeaderComponent,
    SiteLayoutComponent,
    SiteHeaderComponent,
    SiteFooterComponent,
    DataPreparationComponent,
    NotificationsComponent,
    SalesInformationComponent,
    SettingsComponent,
    UsersComponent,
    ModelsComponent,
    SaveUserComponent
  ],
  imports: [
    routing,
    NgbModule.forRoot(),
    HttpModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    Select2Module,
    BrowserAnimationsModule,
    MatTabsModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatStepperModule,
    MatToolbarModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
