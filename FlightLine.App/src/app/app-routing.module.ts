import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApprovalComponent } from './approval/approval.component';
import { AvailabilityComponent } from './availability/availability.component';
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
    path: ':id/form',
    component: FormComponent
  },
  {
    path: ':id/approval',
    component: ApprovalComponent
  },
  {
    path: ':id/availability',
    component: AvailabilityComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
