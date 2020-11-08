import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from '../header/header.component'
import { FooterComponent } from '../footer/footer.component';

const routes: Routes = [
  {
    path: '',
    children: [
   
      { path: 'header', component: HeaderComponent, pathMatch: 'full' },
      { path: 'footer', component: FooterComponent }
    ]
  }
];


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HeaderfooterModule { }
