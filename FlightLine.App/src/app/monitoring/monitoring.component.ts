import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgProgress, NgProgressRef } from 'ngx-progressbar';
import { debounceTime } from 'rxjs/operators';
import { DataService } from '../data.service';
import { CheckrideForm } from '../models/checkride-form';

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
  statusSearch = '';

  constructor(
    private progressService: NgProgress,
    private dataService: DataService
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
      this.search();
    });
  }

  search(): void {
    if (this.nameSearch.trim() === '' && ((this.statusSearch === '') || (this.statusSearch === 'none'))) {
      this.filteredForms = this.checkrideForms;
    } else if (this.nameSearch.trim() === '') {
      const statusRegex = new RegExp(this.statusSearch, 'i');
      if (this.checkrideForms) {
        this.filteredForms = this.checkrideForms.filter(x => x.studentName.match(statusRegex));
      }
    } else if ((this.statusSearch === '') || (this.statusSearch === 'none')) {
      const nameRegex = new RegExp(this.nameSearch, 'i');
      if (this.checkrideForms) {
        this.filteredForms = this.checkrideForms.filter(x => x.studentName.match(nameRegex));
      }
    } else {
      const nameRegex = new RegExp(this.nameSearch, 'i');
      const statusRegex = new RegExp(this.statusSearch, 'i');
      if (this.checkrideForms) {
        this.filteredForms = this.checkrideForms.filter(x => x.studentName.match(nameRegex));
        this.filteredForms = this.checkrideForms.filter(x => x.studentName.match(statusRegex));
      }
    }
    console.log(this.filteredForms);
  }

}
