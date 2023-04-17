import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FormDetails } from '../models/form-details';
import { NgProgress, NgProgressRef } from 'ngx-progressbar';
import { DataService } from '../data.service';

@Component({
  selector: 'app-approval',
  templateUrl: './approval.component.html',
  styleUrls: ['./approval.component.scss']
})
export class ApprovalComponent implements OnInit {
  panelOpenState = false;
  currentDate = new Date();
  currentForm: FormDetails = new FormDetails({});
  progress: NgProgressRef;

  constructor(
    public userService: UserService,
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
