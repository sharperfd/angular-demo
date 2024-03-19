import { Component } from '@angular/core';
import { AuthService } from '@app/services/auth.service';
import { StorageService } from '@app/services/storage.service';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '@app/error-dialog/error-dialog.component';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgFor } from '@angular/common';

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
    private dialog: MatDialog,
    private router: Router
  ) {
    if (this.storageService.isLoggedIn()) {
      this.router.navigate(['/']);
    }
  }

  onSubmit(): void {
    const { username, password } = this.form;

    this.authService.login(username, password).subscribe({
      next: (data) => {
        this.storageService.saveUser(data);
        this.router.navigate(['/']);
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
