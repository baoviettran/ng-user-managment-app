import { AuthService } from './services/auth.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserInfoService } from './services/user-info.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';

import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HttpConfigInterceptor } from './interceptor/httpconfig.interceptor';
import { LoginComponent } from './components/login/login.component';
import { UserAddComponent } from './components/user-add/user-add.component'

import { JwtModule, JwtModuleOptions } from "@auth0/angular-jwt";


@NgModule({
  declarations: [
    AppComponent,
    UserDetailComponent,
    DashboardComponent,
    LoginComponent,
    UserAddComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {}
      }),
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ButtonModule,
    TableModule,
    CardModule,
    InputTextModule,
    PasswordModule
  ],
  providers: [
    UserInfoService,
    AuthenticationService,
    AuthService,


    { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
