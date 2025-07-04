import { Component, OnInit } from '@angular/core';
import { Tag } from '../../../share/models/Tag';
import { FoodService } from '../../../service/food.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tags',
  imports: [RouterModule,CommonModule],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css'
})
export class TagsComponent implements   OnInit{
tags?:Tag[];
constructor(foodService:FoodService){
  this.tags = foodService.getAllTags();
}

ngOnInit(): void {
}

}

