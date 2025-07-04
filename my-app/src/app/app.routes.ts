import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { UserComponent } from './user/user.component';

let user = fetch('http://13.233.101.37:8000/profile')
  .then((res) => res.json())
  .then((data) => {
    return data;
  });

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'user/:id', component: UserComponent },
  { path: 'profile', component: ProfilePageComponent, data: { user: user } },
  { path: '**', component: NotFoundComponent }, // This is a universal route So always keep it at last
];
