import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {
  @Output() getUsers = new EventEmitter();
  users = ['shivam', 'ashu', 'krishu'];

  // ngOnInit() {
  //   this.getUsers.emit(this.users);
  // }

  loadUsers(){
    this.getUsers.emit(this.users)
  }
}
