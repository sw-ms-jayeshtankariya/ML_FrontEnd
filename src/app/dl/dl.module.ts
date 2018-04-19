import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyProjectsComponent } from './myprojects/myprojects.component';
import { DLComponent } from './dl.component';
const routes: Routes = [
  {
    path: 'dl', component: DLComponent, children: [
      { path: 'myprojects', component: MyProjectsComponent }]
  }
];

@NgModule({
  declarations: [
    DLComponent,
    MyProjectsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: []
})
export class DLModule { }
