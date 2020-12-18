import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillinginfoComponent } from './billinginfo/billinginfo.component';
import { PaymentinfoComponent } from './paymentinfo/paymentinfo.component';
import { DeliveryinfoComponent } from './deliveryinfo/deliveryinfo.component';
import { OrdersummaryinfoComponent } from './ordersummaryinfo/ordersummaryinfo.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderfooterModule } from '../headerfooter/headerfooter.module';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  {
    path: 'checkout',component:CheckoutComponent
    
  }
];

@NgModule({
  declarations: [
    BillinginfoComponent, 
    PaymentinfoComponent,
     DeliveryinfoComponent, 
     OrdersummaryinfoComponent,
     CheckoutComponent
    ],
     
    
     imports: [
       CommonModule,
       RouterModule.forChild(routes),
       HeaderfooterModule
     ],
     exports:[RouterModule]
})
export class CheckoutModule { }
