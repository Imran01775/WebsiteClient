import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './Site/modules/home/home.module';
import { RegistrationloginModule } from './admin/modules/registrationlogin/registrationlogin.module';
import { HeaderfooterModule } from './Site/modules/headerfooter/headerfooter.module';
import { ProductModule } from './Site/modules/product/product.module';
<<<<<<< HEAD
import { CategoryModule } from './Site/modules/category/category.module';
import { CheckoutModule } from './Site/modules/checkout/checkout.module';
=======
import { ProductAdminModule } from './admin/modules/product/product-admin.module';

>>>>>>> a45f24c8674d95f0b9f56cfc1aed374d16d4d65b

@NgModule({
  declarations: [
    AppComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    RegistrationloginModule,
    HeaderfooterModule,
    ProductModule,
<<<<<<< HEAD
    CategoryModule,
    CheckoutModule
=======
    ProductAdminModule
>>>>>>> a45f24c8674d95f0b9f56cfc1aed374d16d4d65b
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
