import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CheckrideForm } from './models/checkride-form';
import { FormDetails } from './models/form-details';

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

  loadFormDetails(checkrideId: number): Observable<any> {
    if (environment.production) {
      return this.httpClient.get(this.baseUrl + '/formdetails/' + checkrideId);
    }
    else {
      return of(this.dummyDetails());
    }
  }

  saveForm(form: FormDetails): Observable<any> {
    if (environment.production) {
      // POST, NOT GET
      return this.httpClient.post(this.baseUrl + '/saveform', form);
    }
    else {
      return of(1);
    }
  }

  saveNewForm(form: CheckrideForm): Observable<any> {
    if (environment.production) {
      // POST, NOT GET
      return this.httpClient.post(this.baseUrl + '/newform', form);
    }
    else {
      return of(1);
    }
  }

  // DUMMY DATA
  dummyForms(): any {
    let tempForms = new Array<CheckrideForm>();
    let temp = {
      checkride_id: 100, student_name: 'Testy Testerson',
      student_id: 0, status: 'pending',
      details: 'What should go here? status is prolly 1 thing. lmk', date_created: new Date()
    };
    for (let i = 0; i < 90; i++) {
      temp.checkride_id++;
      temp.student_id++;
      temp.student_name = 'Testy Testerson ' + temp.student_id.toString();
      if (i < 3) {
        temp.status = 'pending';
      } else if (i < 6) {
        temp.status = 'active';
      } else if (i < 9) {
        temp.status = 'assigned';
      } else if (i < 12) {
        temp.status = 'partially scheduled';
      } else if (i < 15) {
        temp.status = 'fully scheduled';
      } else if (i < 18) {
        temp.status = 'complete';
      } else if (i < 21) {
        temp.status = 'pending';
      } else if (i < 24) {
        temp.status = 'active';
      } else if (i < 27) {
        temp.status = 'assigned';
      } else if (i < 30) {
        temp.status = 'partially scheduled';
      } else if (i < 33) {
        temp.status = 'fully scheduled';
      } else if (i < 36) {
        temp.status = 'complete';
      } else if (i < 39) {
        temp.status = 'pending';
      } else if (i < 42) {
        temp.status = 'active';
      } else if (i < 45) {
        temp.status = 'assigned';
      } else if (i < 48) {
        temp.status = 'partially scheduled';
      } else if (i < 51) {
        temp.status = 'fully scheduled';
      } else if (i < 54) {
        temp.status = 'complete';
      } else if (i < 57) {
        temp.status = 'pending';
      } else if (i < 60) {
        temp.status = 'active';
      } else if (i < 63) {
        temp.status = 'assigned';
      } else if (i < 66) {
        temp.status = 'partially scheduled';
      } else if (i < 69) {
        temp.status = 'fully scheduled';
      } else if (i < 72) {
        temp.status = 'complete';
      } else if (i < 75) {
        temp.status = 'pending';
      } else if (i < 78) {
        temp.status = 'active';
      } else if (i < 81) {
        temp.status = 'assigned';
      } else if (i < 84) {
        temp.status = 'partially scheduled';
      } else if (i < 87) {
        temp.status = 'fully scheduled';
      } else {
        temp.status = 'complete';
      }
      tempForms.push(new CheckrideForm(temp));
    }
    return tempForms;
  }

  dummyDetails(): any {
    return new FormDetails({});
  }
}
