import { Component } from '@angular/core';
import { UserForm } from '../models/user-form';
import { AuthService } from '../services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../error-dialog/error-dialog.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(private authService: AuthService, private dialog: MatDialog) {}

  form: UserForm = new UserForm();
  isError = false;

  onSubmit() {
    const { username, email, password } = this.form;
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);

    this.authService.register(username, email, password).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (err) => {
        this.dialog.open(ErrorDialogComponent, {
          data: { message: err.message },
        });
        console.error(err);
      },
    });
  }

  isValidateUsername(): boolean {
    if (
      !this.form.username ||
      this.form.username === '' ||
      this.form.username.length < 3 ||
      this.form.username.length > 20
    ) {
      return false;
    } else {
      return true;
    }
  }
}
