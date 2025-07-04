import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private router: Router) {}
  goToProfile() {
    this.router.navigate(['profile'], { queryParams: { name: 'shivay' } });
  }
  users = [
    { id: 1, name: 'Shivam', email: 'shivam@test.com', age: 28 },
    { id: 2, name: 'Peter', email: 'peter@test.com', age: 38 },
    { id: 3, name: 'Hendry', email: 'hendry@test.com', age: 22 },
    { id: 4, name: 'Kevin', email: 'kevin@test.com', age: 27 },
    { id: 5, name: 'Ben', email: 'ben@test.com', age: 24 },
  ];
}
