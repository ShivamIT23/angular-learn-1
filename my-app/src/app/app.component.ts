import {
  afterNextRender,
  afterRender,
  Component,
  ViewChild,
} from '@angular/core';
import { ProductService } from './services/product.service';
// import { RouterOutlet } from '@angular/router';
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
    // RouterOutlet,
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

  productData: { name: string; brand: string; price: number }[] = [];
  constructor(private productService: ProductService) {}

  getProduct() {
    this.productData = this.productService.getProductData();
  }
}
