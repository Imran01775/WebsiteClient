import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductEntryComponent } from './product-entry/product-entry.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderfooterModule } from 'src/app/Site/modules/headerfooter/headerfooter.module';


const routes: Routes = [
  {
    path: 'product-entry',component:ProductEntryComponent
    
  }
];

@NgModule({
  declarations: [
    ProductEntryComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HeaderfooterModule
  ],
  exports:[RouterModule]
})
export class ProductAdminModule { }
