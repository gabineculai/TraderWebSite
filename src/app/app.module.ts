import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './security/sign-up.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { AlertMessagesComponent } from './shared/alert-messages.component';
import { NgxCaptchaModule } from '../projects/ngx-captcha-lib/src/lib/ngx-captcha.module';
import { SignInComponent } from './security/sign-in.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignUpComponent,
    AlertMessagesComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    NgxCaptchaModule,
    RouterModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
