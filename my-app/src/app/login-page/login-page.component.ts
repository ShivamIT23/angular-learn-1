import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  // name=new FormControl('test');
  // password=new FormControl('123');

  // displayValue(){
  //   console.log(this.name.value,this.password.value)
  // }

  formData = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.maxLength(20)]),
    email: new FormControl('',[Validators.required,Validators.maxLength(100),
      Validators.pattern(`^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$`)
    ]),
    password: new FormControl('',Validators.minLength(5))
  })

  onSubmit(){
    console.log(this.formData.value)
  }

  get name(){
    return this.formData.get('name')
  }

  get email(){
    return this.formData.get('email')
  }

  get password(){
    return this.formData.get('password')
  }

  setValues(){
    this.formData.setValue({
      name:"shivam",
      email:"shivam@gmail.com",
      password:"shivam 2311"
    })
  }
}
