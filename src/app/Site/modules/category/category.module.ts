import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category/category.component';
import { CategoryfilterComponent } from './categoryfilter/categoryfilter.component';
import { CategoryproductsComponent } from './categoryproducts/categoryproducts.component';
import { CategorysortingComponent } from './categorysorting/categorysorting.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderfooterModule } from '../headerfooter/headerfooter.module';


const routes: Routes = [
  {
    path: 'category',component:CategoryComponent
    
  }
];
@NgModule({
  declarations: [
    CategoryComponent, 
    CategoryfilterComponent,
    CategoryproductsComponent,
    CategorysortingComponent
  ],
    
    imports: [
      CommonModule,
      RouterModule.forChild(routes),
      HeaderfooterModule
    ],
    exports:[RouterModule]
})
export class CategoryModule { }
