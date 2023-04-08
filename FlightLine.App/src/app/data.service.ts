import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CheckrideForm } from './models/checkride-form';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl = environment.baseUrl;

  constructor(
    private httpClient: HttpClient
  ) { }

  loadForms(): Observable<any> {
    if (environment.production) {
      return this.httpClient.get(this.baseUrl + '/forms');
    }
    else {
      return of(this.dummyForms());
    }
  }

  // DUMMY DATA
  dummyForms(): any {
    let tempForms = new Array<CheckrideForm>();
    let temp = {
      checkride_id: 100, student_name: 'Testy Testerson', 
      student_id: 0, status: 'new', 
      details: 'What should go here? status is prolly 1 thing. lmk', date_created: new Date()
    };
    for (let i = 0; i < 60; i++) {
      temp.checkride_id++;
      temp.student_id++;
      temp.student_name = 'Testy Testerson ' + temp.student_id.toString();
      if (i < 3) {
        temp.status = 'new';
      } else if (i < 6) {
        temp.status = 'partially approved';
      } else if (i < 9) {
        temp.status = 'fully approved';
      } else if (i < 12) {
        temp.status = 'scheduled';
      } else if (i < 15) {
        temp.status = 'archived';
      } else if (i < 18) {
        temp.status = 'new';
      } else if (i < 21) {
        temp.status = 'partially approved';
      } else if (i < 24) {
        temp.status = 'fully approved';
      } else if (i < 27) {
        temp.status = 'scheduled';
      } else if (i < 30) {
        temp.status = 'archived';
      } else if (i < 33) {
        temp.status = 'new';
      } else if (i < 36) {
        temp.status = 'partially approved';
      } else if (i < 39) {
        temp.status = 'fully approved';
      } else if (i < 42) {
        temp.status = 'scheduled';
      } else if (i < 45) {
        temp.status = 'archived';
      } else if (i < 48) {
        temp.status = 'new';
      } else if (i < 51) {
        temp.status = 'partially approved';
      } else if (i < 54) {
        temp.status = 'fully approved';
      } else if (i < 57) {
        temp.status = 'scheduled';
      } else {
        temp.status = 'archived';
      }
      tempForms.push(new CheckrideForm(temp));
    }
    return tempForms;
  }
}
