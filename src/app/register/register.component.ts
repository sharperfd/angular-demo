import { Component } from '@angular/core';
import { UserForm } from '@app/models/user-form';
import { AuthService } from '@app/services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '@app/error-dialog/error-dialog.component';
import { StorageService } from '@services/storage.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(
    private authService: AuthService,
    private dialog: MatDialog,
    private storageService: StorageService
  ) {}

  form: UserForm = new UserForm();
  isError = false;

  onSubmit() {
    const { username, email, password } = this.form;
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
    this.storageService.saveUser(this.form);

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
