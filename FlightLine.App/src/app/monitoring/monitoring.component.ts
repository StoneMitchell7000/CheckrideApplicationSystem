import { Component, OnInit } from '@angular/core';
import { NgProgress, NgProgressRef } from 'ngx-progressbar';
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

  constructor(
    private progressService: NgProgress,
    private dataService: DataService
  ) {
    this.progress = this.progressService.ref('myProgress');
  }

  ngOnInit(): void {
    this.loadForms();

    // this.searchControl.valueChanges
    //   .pipe(
    //     debounceTime(500)
    //   )
    //   .subscribe(resp => {
    //     this.nameSearch = resp;
    //     this.search();
    //   });

    // this.phoneSearchControl.valueChanges
    //   .pipe(
    //     debounceTime(500)
    //   )
    //   .subscribe(resp => {
    //     this.phoneSearch = resp;
    //     this.search();
    //   });
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
    this.filteredForms = this.checkrideForms;
    console.log(this.filteredForms);
    // if (this.nameSearch.trim() === '' && this.phoneSearch.trim() === '') {
    //   this.filteredPatients = this.patients;
    // } else if (this.nameSearch.trim() === '') {
    //   const phoneRegex = new RegExp(this.phoneSearch, 'i');
    //   if (this.patients) {
    //     this.filteredPatients = this.patients.filter(x => x.phone && x.phone.toString().match(phoneRegex));
    //   }
    // } else if (this.phoneSearch.trim() === '') {
    //   const nameRegex = new RegExp(this.nameSearch, 'i');
    //   if (this.patients) {
    //     this.filteredPatients = this.patients.filter(x => x.fullName.match(nameRegex) && x.firstName && x.lastName);
    //   }
    // } else {
    //   const nameRegex = new RegExp(this.nameSearch, 'i');
    //   const phoneRegex = new RegExp(this.phoneSearch, 'i');
    //   if (this.patients) {
    //     this.filteredPatients = this.patients.filter(x => x.fullName.match(nameRegex) && x.firstName && x.lastName);
    //     this.filteredPatients = this.filteredPatients.filter(y => y.phone && y.phone.toString().match(phoneRegex));
    //   }
    // }
  }

}
