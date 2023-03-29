import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private userService: UserService,
  ) { }

  ngOnInit(): void {

  }

  changeUser(userType: string): void {
    this.userService.changeUser(userType);
    this.router.navigate(['']);
  }

}
