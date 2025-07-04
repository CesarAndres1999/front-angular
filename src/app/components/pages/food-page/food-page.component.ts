import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Food } from '../../../share/models/Food';
import { FoodService } from '../../../service/food.service';
import { CommonModule } from '@angular/common';
import { CartService } from '../../../service/cart.service';

@Component({
  selector: 'app-food-page',
  imports: [RouterModule,CommonModule,],
  templateUrl: './food-page.component.html',
  styleUrl: './food-page.component.css'
})
export class FoodPageComponent {
food!: Food;
constructor(activatedRoute:ActivatedRoute,foodService:FoodService,private cartService:CartService, private router: Router){
  activatedRoute.params.subscribe((params)=>{
    if(params.id)
      this.food = foodService.getFoodById(params.id);
  })
}

ngOnInit():void{

}
addTocart(){
this.cartService.addToCart(this.food);
this.router.navigateByUrl('/cart-page');
}

}
