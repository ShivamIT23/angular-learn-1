import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() {
    console.log('product service');
   }

   getProductData(){
    return [
      {
        name:'laptop',
        brand:'dell',
        price:20000
      },
      {
        name:'computer',
        brand:'hp',
        price:80000
      },
      {
        name:'Phone',
        brand:'Apple',
        price:120000
      },
    ]
   }
}
