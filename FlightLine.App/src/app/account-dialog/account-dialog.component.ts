import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from '../user.service';

@Component({
  selector: 'app-account-dialog',
  templateUrl: './account-dialog.component.html',
  styleUrls: ['./account-dialog.component.scss']
})
export class AccountDialogComponent implements OnInit {
  displayUser = '';

  constructor(
    public dialogRef: MatDialogRef<AccountDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public userService: UserService
  ) { }

  ngOnInit(): void {

    if (this.userService.currentUser === 'IP') {
      this.displayUser = 'Instructor Pilot'
    } else if (this.userService.currentUser === 'CI') {
      this.displayUser = 'Check Instructor'
    } else if (this.userService.currentUser === 'TM') {
      this.displayUser = 'Training Manager'
    } else if (this.userService.currentUser === 'FO') {
      this.displayUser = 'Flight Operations'
    } else if (this.userService.currentUser === 'RO') {
      this.displayUser = 'Records Office'
    } else {
      this.displayUser = 'Administrator'
    }

  }

  logout(): void {
    this.dialogRef.close(true);
  }
}
