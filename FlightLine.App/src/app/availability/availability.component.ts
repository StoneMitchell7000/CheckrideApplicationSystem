import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-availability',
  templateUrl: './availability.component.html',
  styleUrls: ['./availability.component.scss']
})
export class AvailabilityComponent implements OnInit {

  constructor(
    public userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  goBack(): void {
    this.router.navigate(['']);
  }
}
