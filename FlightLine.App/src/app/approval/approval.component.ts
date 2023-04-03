import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-approval',
  templateUrl: './approval.component.html',
  styleUrls: ['./approval.component.scss']
})
export class ApprovalComponent {
  currentDate = new Date();

  constructor(
    public userService: UserService,
    private router: Router
  ) { }

  goBack(): void {
    this.router.navigate(['']);
  }
}
