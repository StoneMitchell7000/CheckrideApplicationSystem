import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FormDetails } from '../models/form-details';
import { NgProgress, NgProgressRef } from '@ngx-progressbar/core';
import { DataService } from '../data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-approval',
  templateUrl: './approval.component.html',
  styleUrls: ['./approval.component.scss']
})
export class ApprovalComponent implements OnInit {
  panelOpenState = false;
  currentForm: FormDetails = new FormDetails({});
  progress: NgProgressRef;

  constructor(
    public userService: UserService,
    private router: Router,
    private progressService: NgProgress,
    private dataService: DataService,
    private snackBar: MatSnackBar
  ) {
    this.progress = this.progressService.ref('myProgress');
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    let checkrideId = +this.router.url.substring(
      this.router.url.indexOf("/") + 1,
      this.router.url.lastIndexOf("/")
    );

    this.currentForm = new FormDetails({});
    this.progress.start();
    this.dataService.loadFormDetails(checkrideId).subscribe(resp => {
      if (environment.production) {
        this.currentForm = resp.msg;
      } else {
        this.currentForm = resp;
      }
      this.currentForm.tmApprovalDate = new Date();
      this.currentForm.roApprovalDate = new Date();
      if (!environment.production) {
        this.currentForm.checkrideId = checkrideId;
      }
      this.progress.complete();
    });
  }

  approve(): void {
    if (this.userService.currentUser === 'TM') {
      if (!this.currentForm.tmApprovalSig) {
        this.openSnackBar('Please sign before completing.', 3000);
      } else {
        this.saveForm();
      }
    } else if (this.userService.currentUser === 'RO') {
      if (!this.currentForm.roApprovalSig) {
        this.openSnackBar('Please sign before completing.', 3000);
      } else {
        this.saveForm();
      }
    } else {
      this.openSnackBar('Invalid user type.', 3000);
    }
  }

  saveForm(): void {
    this.progress.start();
    this.dataService.saveFormDetails(this.currentForm).subscribe(resp => {
      this.progress.complete();
      this.dataService.formUpdateId = this.currentForm.checkrideId;
      // VVV covers EOC's and everthing else(RO approving doesn't change status)
      // (app still needs a means of differentiating b/w EOC's and otherwise)
      if (this.userService.currentUser === 'TM') {
        this.dataService.formUpdateStatus = 'Active';
      } else {
        // don't update
        this.dataService.formUpdateId = -1;
      }
      this.goBack();
    });
  }

  goBack(): void {
    this.router.navigate(['']);
  }

  openSnackBar(msg: string, msgDuration: number = 2000, btn: string = 'OK') {
    this.snackBar.open(msg, btn, {
      duration: msgDuration,
    });
  }
}
