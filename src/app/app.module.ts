import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './Site/modules/home/home.module';
import { RegistrationloginModule } from './admin/modules/registrationlogin/registrationlogin.module';
import { HeaderfooterModule } from './Site/modules/headerfooter/headerfooter.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    RegistrationloginModule,
    HeaderfooterModule 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
