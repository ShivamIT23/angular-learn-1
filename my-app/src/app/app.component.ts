import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { UserPageComponent } from './user-page/user-page.component';
// import { SignupComponent } from './signup/signup.component';
// import { ProfileComponent } from './profile/profile.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    UserPageComponent
    // HeaderComponent
    // LoginComponent,
    // ,SignupComponent
    // ,ProfileComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Mr.';
  name = 'Shivam';
}
