import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-page',
  imports: [],
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.css'
})
export class UserPageComponent {
  @Input() user:string='';
  @Input() city:string='';
}
