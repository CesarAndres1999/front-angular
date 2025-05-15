import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Food } from '../../../share/models/Food';
import { FoodService } from '../../../service/food.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-food-page',
  imports: [RouterModule,CommonModule,],
  templateUrl: './food-page.component.html',
  styleUrl: './food-page.component.css'
})
export class FoodPageComponent {
food!: Food;
constructor(activatedRoute:ActivatedRoute,foodService:FoodService){
  activatedRoute.params.subscribe((params)=>{
    if(params.id)
      this.food = foodService.getFoodById(params.id);
  })
}

ngOnInit():void{

}
}
