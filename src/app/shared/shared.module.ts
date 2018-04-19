import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './settings/settings.component';
const routes: Routes = [  
    { path: 'settings', component: SettingsComponent },
]; 

@NgModule({
  declarations: [
    SettingsComponent
],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: []
})
export class SharedModule { }
