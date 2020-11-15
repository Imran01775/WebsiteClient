import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductimageComponent } from './productimage/productimage.component';
import { ProductinfoComponent } from './productinfo/productinfo.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { RelatedproductComponent } from './relatedproduct/relatedproduct.component';
import { ProductComponent } from './product/product.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderfooterModule } from '../headerfooter/headerfooter.module';
// import { ProductbreadcrumComponent } from './productbreadcrum/productbreadcrum.component';

const routes: Routes = [
  {
    path: 'product',component:ProductComponent
    
  }
];

@NgModule({
  declarations: [
    
    // ProductbreadcrumComponent,
    ProductComponent,
    ProductimageComponent,
    ProductinfoComponent, 
    ProductdetailsComponent, 
    RelatedproductComponent
    ]
    
    ,
    imports: [
      CommonModule,
      RouterModule.forChild(routes),
      HeaderfooterModule
    ],
    exports:[RouterModule]
})
export class ProductModule { }
