import { Injectable } from '@angular/core';
import { Food } from '../share/models/Food';
import { sample_foods, sample_tags } from '../../data';
import { Tag } from '../share/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():Food[]{
    return sample_foods;
  }

  getAllFoodBySearchTerm(searchTerm:string){
    return this.getAll().filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }

  getAllTags():Tag[]{
    return sample_tags;
  }
  
  getAllFoodsByTag(tag:string):Food[]{
    return tag === "ALL"?
    this.getAll():
    this.getAll().filter( food => food.tags?.includes(tag))
  }

  getFoodById(foodId:string):Food{
    return this.getAll().find(food=>food.id == foodId) ?? new Food();
  }
}
