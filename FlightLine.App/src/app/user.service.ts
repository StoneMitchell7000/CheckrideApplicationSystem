import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // alot of temp stuff in here
  currentUser: string;

  constructor() {
    this.currentUser = 'ADMIN';
  }

  changeUser(userType: string): void {
    this.currentUser = userType;
  }
}
