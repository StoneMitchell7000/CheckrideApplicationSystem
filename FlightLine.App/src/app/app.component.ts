import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AccountDialogComponent } from './account-dialog/account-dialog.component';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FlightLine.App';

  constructor(
    public accountDialog: MatDialog,
    private userService: UserService,
    public router: Router
  ) { }

  openAccount(): void {
    const dialog = this.accountDialog.open(AccountDialogComponent, {
      position: { top: '10px', right: '60px' }
    });
    dialog.afterClosed().subscribe(result => {
      if (result) {
        this.logout();
      }
    });
  }

  logout(): void {
    this.router.navigate(['login']);
  }
}
