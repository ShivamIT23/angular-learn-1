import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { UserComponent } from './user/user.component';
import { SignupComponent } from './signup/signup.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

let user = fetch('http://13.233.101.37:8000/profile')
  .then((res) => res.json())
  .then((data) => {
    return data;
  });

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'admin',
    loadComponent: () =>
      import('./admin/admin.component').then((c) => c.AdminComponent),
  },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'user/:id', component: UserComponent },
  { path: 'profile', component: ProfilePageComponent, data: { user: user } },
  { path: 'parent', component: ParentComponent },
  { path: 'child', component: ChildComponent },
  // { path: '**', component: NotFoundComponent }, // This is a universal route So always keep it at last
];
