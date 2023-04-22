import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CheckrideForm } from './models/checkride-form';
import { FormDetails } from './models/form-details';
import { AnimationDriver } from '@angular/animations/browser';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl = environment.baseUrl;
  formUpdateId: number = -1;
  formUpdateStatus: string = 'null';

  constructor(
    private httpClient: HttpClient
  ) { }

  // load all forms (basic info)
  loadForms(): Observable<any> {
    if (environment.production) {
      return this.httpClient.get(this.baseUrl + '/forms');
    }
    else {
      return of(this.dummyForms());
    }
  }

  // load one form all feilds (by checkrideId)
  loadFormDetails(checkrideId: number): Observable<any> {
    if (environment.production) {
      return this.httpClient.get(this.baseUrl + '/formdetails/' + checkrideId);
    }
    else {
      return of(this.dummyDetails());
    }
  }

  // save all form fields of one form (except basic info)
  saveFormDetails(form: FormDetails): Observable<any> {
    if (environment.production) {
      // POST, NOT GET
      return this.httpClient.post(this.baseUrl + '/saveformdetails', form);
    }
    else {
      return of(1);
    }
  }

  // save basic info of one form
  saveForm(form: CheckrideForm): Observable<any> {
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
      student_id: 0, status: 'Pending',
      details: 'What should go here? status is prolly 1 thing. lmk', date_created: new Date()
    };
    for (let i = 0; i < 90; i++) {
      temp.checkride_id++;
      temp.student_id++;
      temp.student_name = 'Testy Testerson ' + temp.student_id.toString();
      if (i < 3) {
        temp.status = 'Pending';
      } else if (i < 6) {
        temp.status = 'Active';
      } else if (i < 9) {
        temp.status = 'Assigned';
      } else if (i < 12) {
        temp.status = 'Partially Scheduled';
      } else if (i < 15) {
        temp.status = 'Fully Scheduled';
      } else if (i < 18) {
        temp.status = 'Complete';
      } else if (i < 21) {
        temp.status = 'Pending';
      } else if (i < 24) {
        temp.status = 'Active';
      } else if (i < 27) {
        temp.status = 'Assigned';
      } else if (i < 30) {
        temp.status = 'Partially Scheduled';
      } else if (i < 33) {
        temp.status = 'Fully Scheduled';
      } else if (i < 36) {
        temp.status = 'Complete';
      } else if (i < 39) {
        temp.status = 'Pending';
      } else if (i < 42) {
        temp.status = 'Active';
      } else if (i < 45) {
        temp.status = 'Assigned';
      } else if (i < 48) {
        temp.status = 'Partially Scheduled';
      } else if (i < 51) {
        temp.status = 'Fully Scheduled';
      } else if (i < 54) {
        temp.status = 'Complete';
      } else if (i < 57) {
        temp.status = 'Pending';
      } else if (i < 60) {
        temp.status = 'Active';
      } else if (i < 63) {
        temp.status = 'Assigned';
      } else if (i < 66) {
        temp.status = 'Partially Scheduled';
      } else if (i < 69) {
        temp.status = 'Fully Scheduled';
      } else if (i < 72) {
        temp.status = 'Complete';
      } else if (i < 75) {
        temp.status = 'Pending';
      } else if (i < 78) {
        temp.status = 'Active';
      } else if (i < 81) {
        temp.status = 'Assigned';
      } else if (i < 84) {
        temp.status = 'Partially Scheduled';
      } else if (i < 87) {
        temp.status = 'Fully Scheduled';
      } else {
        temp.status = 'Complete';
      }
      tempForms.push(new CheckrideForm(temp));
    }
    return tempForms;
  }

  dummyDetails(): any {
    return new FormDetails({});
  }
}
