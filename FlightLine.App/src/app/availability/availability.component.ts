import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-availability',
  templateUrl: './availability.component.html',
  styleUrls: ['./availability.component.scss']
})
export class AvailabilityComponent implements OnInit {
  array168: number[] = new Array();

  constructor(
    public userService: UserService,
    private router: Router
  ) {
    for (let i = 1; i <= 168; i++) {
      this.array168.push(i);
    }
  }

  ngOnInit(): void {
  }

  goBack(): void {
    this.router.navigate(['']);
  }
}
