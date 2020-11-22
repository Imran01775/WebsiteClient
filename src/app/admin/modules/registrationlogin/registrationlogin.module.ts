import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import { RegistrationComponent } from '../registration/registration.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderfooterModule } from 'src/app/Site/modules/headerfooter/headerfooter.module';

const routes: Routes = [
  {
    path: '',
    children: [
      // { path: '', component: LoginComponent, pathMatch: 'full' },
      { path: 'login', component: LoginComponent, pathMatch: 'full' },
      { path: 'registration', component: RegistrationComponent }
    ]
  }
];


@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HeaderfooterModule
  ],
  exports:[RouterModule]
})
export class RegistrationloginModule { }
