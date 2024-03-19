import { Component } from '@angular/core';

import { AuthService } from '@services/auth.service';
import { StorageService } from '@services/storage.service';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '@dialogs/error-dialog.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  form: any = {
    username: null,
    password: null,
  };

  constructor(
    private authService: AuthService,
    private storageService: StorageService,
    private dialog: MatDialog
  ) {}

  onSubmit(): void {
    const { username, password } = this.form;

    this.authService.login(username, password).subscribe({
      next: (data) => {
        this.storageService.saveUser(data);
        location.reload();
      },
      error: (err) => {
        console.error(err);
        this.dialog.open(ErrorDialogComponent, {
          data: { message: 'Login failed: ' + err.message },
        });
      },
    });
  }
}
