import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormDetails } from '../models/form-details';
import { DataService } from '../data.service';
import { NgProgress, NgProgressRef } from 'ngx-progressbar';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  styleUrls: ['./form.component.scss'],
  selector: 'app-form-form',
  templateUrl: 'form.component.html',
})
export class FormComponent implements OnInit {
  panelOpenState = false;
  currentForm: FormDetails = new FormDetails({});
  progress: NgProgressRef;

  constructor(
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
    this.currentForm = new FormDetails({});
    this.progress.start();
    this.dataService.loadFormDetails().subscribe((resp) => {
      // this.currentForm = resp.msg;
      this.currentForm = resp;
      this.progress.complete();
    });
  }

  goBack(): void {
    this.router.navigate(['']);
  }

  submit(): void {
    // only need validation on fields we need. idk which those are, maybe ask someone else.
    for (const key in this.currentForm) {
      if ((this.currentForm as any)[key] == null) {
        this.openSnackBar(`Please fill out the ${key} field`, 3000);
        return;
      }
    }
        this.saveForm();
  }
    

  

  saveForm(): void {
    this.progress.start();
    this.dataService.saveForm(this.currentForm).subscribe((resp) => {
      this.progress.complete();
      this.goBack();
    });
  }

  openSnackBar(msg: string, msgDuration: number = 2000, btn: string = 'OK') {
    this.snackBar.open(msg, btn, {
      duration: msgDuration,
    });
  }
}
