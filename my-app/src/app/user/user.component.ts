import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  constructor(private route:ActivatedRoute){}
  ngOnInit(){
    this.route.params.subscribe((params)=>{
      console.log(params)
    })
  }
}
