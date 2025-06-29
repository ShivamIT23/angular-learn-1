import { Component, computed, effect, Signal, signal } from '@angular/core';

@Component({
  selector: 'login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  // display = true;
  // toggle=true
  // toggleDiv(){
  //   this.display = !this.display
  // }
  // toggleTwo(){
  //   this.toggle = !this.toggle
  // }

  // users=["shivam","sam","snil","rahul"]
  count = signal(10);
  data: Signal<number> = computed(() => this.count());
  x = 20;
  notData = this.x;

  // constructor(){
  //   effect(()=>{
  //     console.log(this.count())
  //   })
  // }

  updateSignal() {
    this.count.set(this.count() + 1);
  }

  updateX() {
    this.x++;
  }

  updateComputed(val: number) {
    console.log(this.data());
    this.count.set(val);
    console.log(this.data());
  }

  updateProperty(val: number) {
    console.log(this.notData);
    this.x = val;
    console.log(this.notData);
  }
}
