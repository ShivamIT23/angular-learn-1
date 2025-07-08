import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  imports: [],
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.css'
})
export class LifecycleComponent {
  @Input() counter=0;

  // constructor(){
  //   console.log('constructor');
  // }

  // ngOnInit(){
  //   console.log('ngOnInit called');
  // }

  // ngOnDestroy(){
  //   console.log('destroy called')
  // }

  ngOnChanges(){
    console.log("changes called")
  }
}
