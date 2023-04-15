import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormDetails } from '../models/form-details';
import { DataService } from '../data.service';
import { NgProgress, NgProgressRef } from 'ngx-progressbar';

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
    private dataService: DataService
  ) {
    this.progress = this.progressService.ref('myProgress');
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.currentForm = new FormDetails({});
    this.progress.start();
    this.dataService.loadFormDetails().subscribe(resp => {
      // this.currentForm = resp.msg;
      this.currentForm = resp;
      this.progress.complete();
    });
  }

  goBack(): void {
    this.router.navigate(['']);
  }

  submit(): void {
    console.log(this.currentForm);
  }
}
