import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AccountDialogComponent } from './account-dialog/account-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FlightLine.App';

  constructor(
    public accountDialog: MatDialog,
  ) { }

  openAccount(): void {
    this.accountDialog.open(AccountDialogComponent, {
      position: { top: '10px', right: '60px' }
    });
  }
}
