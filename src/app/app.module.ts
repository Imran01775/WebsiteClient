import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './Site/modules/home/home.module';
import { RegistrationloginModule } from './admin/modules/registrationlogin/registrationlogin.module';
import { HeaderfooterModule } from './Site/modules/headerfooter/headerfooter.module';
import { ProductModule } from './Site/modules/product/product.module';
import { CategoryModule } from './Site/modules/category/category.module';
import { CheckoutModule } from './Site/modules/checkout/checkout.module';

@NgModule({
  declarations: [
    AppComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    RegistrationloginModule,
    HeaderfooterModule,
    ProductModule,
    CategoryModule,
    CheckoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
