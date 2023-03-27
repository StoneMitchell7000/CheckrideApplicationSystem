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
      if (i < 5) {
        temp.status = 'new';
      } else if (i < 10) {
        temp.status = 'pending';
      } else if (i < 15) {
        temp.status = 'completed';
      } else if (i < 20) {
        temp.status = 'new';
      } else if (i < 25) {
        temp.status = 'pending';
      } else if (i < 30) {
        temp.status = 'completed';
      } else if (i < 35) {
        temp.status = 'new';
      } else if (i < 40) {
        temp.status = 'pending';
      } else if (i < 45) {
        temp.status = 'completed';
      } else if (i < 50) {
        temp.status = 'new';
      } else if (i < 55) {
        temp.status = 'pending';
      } else {
        temp.status = 'completed';
      }
      tempForms.push(new CheckrideForm(temp));
    }
    return tempForms;
  }
}
