import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { HeaderfooterModule } from '../headerfooter/headerfooter.module';

const routes: Routes = [
  {
    path: '',component:HomeComponent
    
  }
];
@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HeaderfooterModule
  ],
  exports:[RouterModule]
})
export class HomeModule { }
