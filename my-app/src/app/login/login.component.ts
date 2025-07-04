import { NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component, computed, effect, Signal, signal } from '@angular/core';
// import { FormsModule } from '@angular/forms';

@Component({
  selector: 'login',
  imports: [
    // NgIf,
    // NgFor,
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault
  ],
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

  // users=["shivam","sam","snil","rahul","anil","praveen"];
  // users=[]
  // count = signal(10);
  // data: Signal<number> = computed(() => this.count());
  // x = 20;
  // notData = this.x;

  // constructor(){
  //   effect(()=>{
  //     console.log(this.count())
  //   })
  // }

  // updateSignal() {
  //   this.count.set(this.count() + 1);
  // }

  // updateX() {
  //   this.x++;
  // }

  // updateComputed(val: number) {
  //   console.log(this.data());
  //   this.count.set(val);
  //   console.log(this.data());
  // }

  // updateProperty(val: number) {
  //   console.log(this.notData);
  //   this.x = val;
  //   console.log(this.notData);
  // }

  // userName = signal('Anil')
  // count = signal(0)
  // displayHead = false;

  // constructor(){
  //   effect(()=>{
  //     if(this.count()==2){
  //       this.displayHead = true
  //       setTimeout(()=>{
  //         this.displayHead= false
  //       },2000)
  //     }
  //     else{
  //       this.displayHead = false
  //     }
  //   })
  // }
  // bgColorGold="gold"
  // bgColorOrange="aliceblue"
  // toggle = false

  // changeBgColor(){
  //   this.toggle = !this.toggle
  // }
  // block = 0;
  // show = true;
  // students = ['shivam', 'sam', 'peacock', 'vinay'];
  // incrementButton() {
  //   this.block =( this.block + 1) % 4;
  // }
  color="red"
  updateColor(color:string){
    this.color = color
  }
}
