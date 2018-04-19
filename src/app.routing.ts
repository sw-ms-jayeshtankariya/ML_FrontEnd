// import {Routes, RouterModule}from '@angular/router'; 
// import {LoginComponent }from './login/login.component'; 
// import {AppComponent }from './app/app.component'; 
// import {SiteLayoutComponent }from './app/_layouts/site-layout/site.layout.component'; 
// import {AppLayoutComponent }from './app/_layouts/app-layout/app.layout.component'; 
// import {DataPreparationComponent }from './app/data-preparation/data.preparation.component'; 
// import {ModelsComponent }from './app/models/models.component'; 
// import {UsersComponent }from './app/users/users.component'; 
// import {NotificationsComponent }from './app/notifications/notifications.component'; 
// import {SettingsComponent }from './app/settings/settings.component'; 
// import {ForgetPasswordComponent }from './forgetpassword/forgetpassword.component'; 
// import {SignUpComponent }from './signup/signup.component'; 
// import { ModuleWithProviders } from "@angular/core";
// import { SaveUserComponent } from './app/users/user.save.component';
// export const routes:Routes = [ 
//     {   path:'',
//         component:SiteLayoutComponent, 
//         children:[ 
//             {
//                 path:'', 
//                 component:LoginComponent, 
//                 data: {
//                     breadcrumb:'Login'
//                 }
//             },  
//             {
//                 path:'signup', 
//                 component:SignUpComponent, 
//                 data: {
//                     breadcrumb:'Sign Up'
//                 }
//             },  
//             {
//                 path:'forgetpassword', 
//                 component:ForgetPasswordComponent, 
//                 data: {
//                     breadcrumb:'Forget Password'
//                 }
//             }
//         ]
//     },  
//     {
//         path:'', 
//         component:AppLayoutComponent, 
//         children: [ 
//                 {
//                     path:'home', 
//                     component:AppComponent,  
//                     children:[ 
//                         {
//                             path:'datapreparation', 
//                             component:DataPreparationComponent,
//                             data: {
//                                 breadcrumb:'Data Preparation'
//                             }
//                         },  
//                         {
//                             path:'models', 
//                             component:ModelsComponent, 
//                             data: {
//                                 breadcrumb:'Models'
//                             }
//                         },  
//                         {
//                             path:'users', 
//                             component:UsersComponent, 
//                             data: {
//                                 breadcrumb:'Users'
//                             }
//                         },  
//                         {
//                             path:'user/:id', 
//                             component:SaveUserComponent, 
//                             data: {
//                                 breadcrumb:'Save User'
//                             }
//                         },  
//                         {
//                             path:'notifications', 
//                             component:NotificationsComponent, 
//                             data: {
//                                 breadcrumb:'Notifications'
//                             }
//                         },  
//                         {
//                             path:'settings', 
//                             component:SettingsComponent, 
//                             data: {
//                                 breadcrumb:'Settings' 
//                             }
//                         },
//                     ]
//                 }
//     ]},  {path:'**', redirectTo:'/home/datapreparation'}
// ]; 
// export const routing: ModuleWithProviders = RouterModule.forRoot(routes);