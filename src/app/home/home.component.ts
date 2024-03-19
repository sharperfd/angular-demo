import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  userData: any;


  ngOnInit(): void {
    // Retrieve user authentication data from session storage
    const userAuthData = sessionStorage.getItem('user-auth');
    if (userAuthData) {
      this.userData = JSON.parse(userAuthData);
    }
  }
}
