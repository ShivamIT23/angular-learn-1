import { Component } from "@angular/core";


@Component({
    selector:"profile",
    imports:[],
    templateUrl:'./profile.component.html',
})

export class ProfileComponent{
    user="Rohan";
    count = 0;
    name = ""
    email=""
    Increment(){
        this.count++;
    }
    Decrement(){
        this.count--;
    }
    updateName(name:string){
        this.user = name
    }
    updateValue(event:Event){
        let input = event.target as HTMLInputElement
        this.name = input.value
    }
    setEmail(val:string){
        this.email=val
    }
    getEmail(val:HTMLInputElement){
        val.value="default@test.com"
    }
}