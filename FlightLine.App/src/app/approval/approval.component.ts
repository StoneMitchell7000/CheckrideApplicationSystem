import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-approval',
  templateUrl: './approval.component.html',
  styleUrls: ['./approval.component.scss']
})
export class ApprovalComponent {
  panelOpenState = false;
  currentDate = new Date();
  balls: any[] = new Array();

  constructor(
    public userService: UserService,
    private router: Router
  ) {
    for (let i = 1; i <= 6; i++) {
      this.balls.push(i);
    }
  }

  goBack(): void {
    this.router.navigate(['']);
  }
}
