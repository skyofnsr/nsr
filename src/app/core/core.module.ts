import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataService } from './services/data.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoreRoutingModule } from './core-routing.module';

import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';
import { AuthGuardService } from './services/auth-guard.service';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UserComponent } from '../user/user.component';
import { FormComponent } from '../form/form.component';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule
    // ,

    // HomeComponent,
    // AboutComponent,
    // UserComponent,
    // FormComponent
  ],
  declarations: [
    LoginComponent, 
    HeaderComponent, 
    NotFoundComponent,

    HomeComponent,
    AboutComponent,
    UserComponent,
    FormComponent
  ],
  exports: [
    RouterModule,
    HeaderComponent,


    HomeComponent,
    AboutComponent,
    UserComponent,
    FormComponent
  ],
  providers: [DataService,
    AuthenticationService,
    AuthGuardService
  ]
})
export class CoreModule { }
