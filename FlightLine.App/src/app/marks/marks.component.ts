import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgProgress, NgProgressRef } from 'ngx-progressbar';
import { DataService } from '../data.service';
import { FormDetails } from '../models/form-details';

@Component({
  selector: 'app-marks',
  templateUrl: './marks.component.html',
  styleUrls: ['./marks.component.scss']
})
export class MarksComponent implements OnInit {
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
}
