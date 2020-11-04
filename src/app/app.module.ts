import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './admin/modules/registration/registration.component';
import { LoginComponent } from './admin/modules/login/login.component';
import { RegistrationloginModule } from './admin/modules/registrationlogin/registrationlogin.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RegistrationloginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
