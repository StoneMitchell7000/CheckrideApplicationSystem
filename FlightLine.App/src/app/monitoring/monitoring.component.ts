import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgProgress, NgProgressRef } from 'ngx-progressbar';
import { debounceTime } from 'rxjs/operators';
import { DataService } from '../data.service';
import { CheckrideForm } from '../models/checkride-form';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { NewFormComponent } from '../new-form/new-form.component';
import { MatDialog } from '@angular/material/dialog';

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
    private router: Router,
    public newForm: MatDialog
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
        this.statusSearch = ['pending'];
      } else if (this.userService.currentUser === "CI") {
        this.statusSearch = ['assigned', 'partially scheduled', 'fully scheduled'];
      } else if (this.userService.currentUser === "TM") {
        this.statusSearch = ['pending'];
      } else if (this.userService.currentUser === "FO") {
        this.statusSearch = ['active', 'assigned', 'partially scheduled', 'fully scheduled'];
      } else if (this.userService.currentUser === "RO") {
        this.statusSearch = ['active'];
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
    this.router.navigate(['/' + form.checkrideId.toString() + '/availability']);
  }

  openForm(form: CheckrideForm) {
    this.router.navigate(['/' + form.checkrideId.toString() + '/form']);
  }

  openMarks(form: CheckrideForm) {
    this.router.navigate(['/' + form.checkrideId.toString() + '/marks']);
  }

  createNewForm() {
    const dialog = this.newForm.open(NewFormComponent, {
      disableClose: true,
    });
    dialog.afterClosed().subscribe(result => {
      if (result) {
        result.dateCreated = new Date();
        result.status = 'pending';
        this.saveNewForm(result);
      }
    });
  }

  saveNewForm(form: CheckrideForm): void {
    this.progress.start();
    this.dataService.saveNewForm(form).subscribe(resp => {
      this.progress.complete();
      this.loadForms();
    });
  }
}
