import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MonitoringComponent } from './monitoring/monitoring.component';
import { ApprovalComponent } from './approval/approval.component';
import { AvailabilityComponent } from './availability/availability.component';
import { FormComponent } from './form/form.component';
import { LoginComponent } from './login/login.component';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgProgressModule } from "ngx-progressbar";
import { NgProgressHttpModule } from "ngx-progressbar/http";
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { AccountDialogComponent } from './account-dialog/account-dialog.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from "@angular/material/expansion";
import { MarksComponent } from './marks/marks.component';
import { NewFormComponent } from './new-form/new-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MonitoringComponent,
    ApprovalComponent,
    AvailabilityComponent,
    FormComponent,
    LoginComponent,
    AccountDialogComponent,
    MarksComponent,
    NewFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatRippleModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatTooltipModule,
    HttpClientModule,
    NgProgressModule.withConfig({
      color: "#ffcb06"
    }),
    NgProgressHttpModule,
    MatDialogModule,
    MatSnackBarModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    FormsModule,
    MatNativeDateModule,
    MatExpansionModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
