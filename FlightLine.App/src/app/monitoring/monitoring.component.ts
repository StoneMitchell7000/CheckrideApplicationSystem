import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgProgress, NgProgressRef } from 'ngx-progressbar';
import { debounceTime } from 'rxjs/operators';
import { DataService } from '../data.service';
import { CheckrideForm } from '../models/checkride-form';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-monitoring',
  templateUrl: './monitoring.component.html',
  styleUrls: ['./monitoring.component.scss']
})
export class MonitoringComponent implements OnInit {
  progress: NgProgressRef;
  checkrideForms: CheckrideForm[] = new Array();
  filteredForms: CheckrideForm[] = new Array();
  searchControl = new FormControl();
  statusSearchControl = new FormControl();
  nameSearch = '';
  statusSearch: string[] = [];

  constructor(
    private progressService: NgProgress,
    private dataService: DataService,
    public userService: UserService,
    private router: Router
  ) {
    this.progress = this.progressService.ref('myProgress');
  }

  ngOnInit(): void {
    this.loadForms();

    this.searchControl.valueChanges
      .pipe(
        debounceTime(500)
      )
      .subscribe(resp => {
        this.nameSearch = resp;
        this.search();
      });

    this.statusSearchControl.valueChanges
      .pipe(
        debounceTime(500)
      )
      .subscribe(resp => {
        this.statusSearch = resp;
        this.search();
      });
  }

  loadForms(): void {
    this.checkrideForms = [];
    this.progress.start();
    this.dataService.loadForms().subscribe(resp => {
      // this.checkrideForms = resp.msg;
      this.checkrideForms = resp;
      this.progress.complete();

      if (this.userService.currentUser === "IP") {
        this.statusSearch = ['new'];
      } else if (this.userService.currentUser === "CI") {
        this.statusSearch = ['fully approved', 'scheduled'];
      } else if (this.userService.currentUser === "TM") {
        this.statusSearch = ['new'];
      } else if (this.userService.currentUser === "FO") {
        this.statusSearch = ['new', 'partially approved', 'fully approved'];
      } else if (this.userService.currentUser === "RO") {
        this.statusSearch = ['partially approved'];
      }

      this.search();
    });
  }

  search(): void {
    if (this.nameSearch.trim() === '' && (this.statusSearch.length === 0)) {
      this.filteredForms = this.checkrideForms;
    } else if (this.nameSearch.trim() === '') {
      if (this.checkrideForms) {
        let tempForms: CheckrideForm[] = new Array();
        this.statusSearch.forEach(term => {
          let statusRegex = new RegExp(term, 'i');
          tempForms = tempForms.concat(this.checkrideForms.filter(x => x.status.match(statusRegex)));
        });
        this.filteredForms = tempForms.sort((a, b) => a.checkrideId - b.checkrideId);
      }
    } else if (this.statusSearch.length === 0) {
      if (this.checkrideForms) {
        const nameRegex = new RegExp(this.nameSearch, 'i');
        this.filteredForms = this.checkrideForms.filter(x => x.studentName.match(nameRegex));
      }
    } else {
      if (this.checkrideForms) {
        const nameRegex = new RegExp(this.nameSearch, 'i');
        let tempForms: CheckrideForm[] = new Array();
        this.statusSearch.forEach(term => {
          let statusRegex = new RegExp(term, 'i');
          tempForms = tempForms.concat(this.checkrideForms.filter(x => x.status.match(statusRegex)));
        });
        this.filteredForms = tempForms.sort((a, b) => a.checkrideId - b.checkrideId);
        this.filteredForms = this.filteredForms.filter(x => x.studentName.match(nameRegex));
      }
    }
  }

  openApproval(form: CheckrideForm) {
    this.router.navigate(['/' + form.checkrideId.toString() + '/approval']);
  }

  openAvailability(form: CheckrideForm) {
    this.router.navigate(['/' + form.studentId.toString() + '/availability']);
  }

}
