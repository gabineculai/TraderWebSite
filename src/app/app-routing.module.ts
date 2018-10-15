import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignUpComponent } from './security/sign-up.component'
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
  },  
  {
      path: 'home',
      component: HomeComponent
  },  
  {
      path: 'sign-up',
      component: SignUpComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
