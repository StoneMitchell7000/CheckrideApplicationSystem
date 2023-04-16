import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CheckrideForm } from '../models/checkride-form';

@Component({
  selector: 'app-new-form',
  templateUrl: './new-form.component.html',
  styleUrls: ['./new-form.component.scss']
})
export class NewFormComponent implements OnInit {
  newForm: CheckrideForm = new CheckrideForm({});

  constructor(
    public dialogRef: MatDialogRef<NewFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  close(save: boolean): void {
    if (!save) {
      this.dialogRef.close();
    } else if (!this.newForm.studentName || !this.newForm.studentId) {
      this.openSnackBar('Please fill out all fields before saving.', 3000);
    } else {
      this.dialogRef.close(this.newForm);
    }
  }

  openSnackBar(msg: string, msgDuration: number = 2000, btn: string = 'OK') {
    this.snackBar.open(msg, btn, {
      duration: msgDuration,
    });
  }

}
