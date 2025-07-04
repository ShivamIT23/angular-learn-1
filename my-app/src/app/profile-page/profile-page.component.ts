import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile-page',
  imports: [],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.css',
})
export class ProfilePageComponent {
  data: string | null = '';
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    //   let name = this.route.snapshot.paramMap.get('name');
    //   this.data = name;
    // this.route.queryParams.subscribe((params) => {
    //   console.log(params);
    //   this.data = params['name'];
    // });

    this.route.data.subscribe(data=>
      console.log(data)
    )
  }
}
