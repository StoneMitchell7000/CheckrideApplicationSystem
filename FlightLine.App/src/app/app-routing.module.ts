import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApprovalComponent } from './approval/approval.component';
import { DetailsComponent } from './details/details.component';
import { FormComponent } from './form/form.component';
import { LoginComponent } from './login/login.component';
import { MonitoringComponent } from './monitoring/monitoring.component';

const routes: Routes = [
  {
    path: '',
    component: MonitoringComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: ':id',
    component: DetailsComponent
  },
  {
    path: ':id/form',
    component: FormComponent
  },
  {
    path: ':id/approval',
    component: ApprovalComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
