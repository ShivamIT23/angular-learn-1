import {
  afterNextRender,
  afterRender,
  Component,
  ViewChild,
} from '@angular/core';
// import { ProductService } from './services/product.service';
// import { ProductsService } from './services/products.service';
// import { UsersService } from './services/users.service';
// import { user } from './interfaces/user';
// import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
// // import { LoginComponent } from './login/login.component';
// import { HeaderComponent } from './header/header.component';
// import { UserPageComponent } from './user-page/user-page.component';
// import { PipesComponent } from './pipes/pipes.component';
// import { SignupComponent } from './signup/signup.component';
// import { ProfileComponent } from './profile/profile.component';
// import { LifecycleComponent } from './lifecycle/lifecycle.component';

@Component({
  selector: 'app-root',
  imports: [
    // FormsModule,
    RouterOutlet,
    RouterLink,
    // LifecycleComponent,
    // PipesComponent
    // UserPageComponent
    // HeaderComponent
    // LoginComponent,
    // ,SignupComponent
    // ,ProfileComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  // @ViewChild('user') LifecycleComponent:any;

  // constructor(){
  //   afterRender(()=>{
  //     console.log("rendered");
  //   })
  //   afterNextRender(()=>{
  //     console.log("one time rendered");
  //   })
  // }

  // title = 'Mr.';
  // name = 'Shivam';

  // counter = 0;

  // updateCounter() {
  //   this.counter++;
  // }

  // productData: { name: string; brand: string; price: number }[] = [];
  // constructor(private productService: ProductService) {}

  // getProduct() {
  //   this.productData = this.productService.getProductData();
  // }

  // constructor(private productsService: ProductsService) {}

  // productList:any;

  // ngOnInit() {
  //   this.productsService.getProductList().subscribe((res:any) => {
  //     console.log(res);
  //     this.productList = res.products
  //   });
  // }

  // selectedUser: user | undefined;

  // constructor(private userService: UsersService) {}

  // users: user[] = [];

  // ngOnInit() {
  //   this.getUser();
  // }

  // getUser() {
  //   this.userService.getUsers().subscribe((res: user[]) => {
  //     this.users = res;
  //     console.log(this.users);
  //   });
  // }

  

  // addUser(val: user) {
  //   if (!this.selectedUser) {
  //     this.userService.saveUsers(val).subscribe((data: user) => {
  //       console.log(data);
  //       if (data) {
  //         this.getUser();
  //       }
  //     });
  //   }
  //   else{
  //     const userData = {...val,id:this.selectedUser.id}
  //     this.userService.updateUser(userData).subscribe((data:user)=>{
  //       console.log(data)
  //       if (data) {
  //         this.getUser();
  //       }
  //     })
  //   }
  // }

  // deleteUser(id: string) {
  //   this.userService.deleteUsers(id).subscribe((data: user) => {
  //     console.log(data);
  //     if (data) {
  //       this.getUser();
  //     }
  //   });
  // }
  // selectUser(id: string) {
  //   this.userService.getSelectedUser(id).subscribe((data: user) => {
  //     this.selectedUser = data;
  //   });
  // }
}
