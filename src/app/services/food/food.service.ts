import { Injectable } from '@angular/core';
import { filter } from 'rxjs';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id:number):any
  {
    // return this.getAll().find(food => food.id === id)!;

    const allfoodItems = this.getAll()
    for (let i = 0; i < allfoodItems.length; i++) {
      if(allfoodItems[i].id == id){
        return allfoodItems[i];
      }    
    }
  }

  getAllFoodByTag(tag:string):Foods[]
  {
    return tag == 'All' ? this.getAll() : this.getAll().filter(food =>food.name == tag);
  }

  getAllFoodByName(name:string):Foods[]
  {
    return name == '' ? this.getAll() : this.getAll().filter(food =>food.name.toUpperCase() == name.toUpperCase());
  }

  getAllTag():Tag[]{
      return [
        { name: 'All', count:4},
        { name: 'Dinner', count:1},
        { name: 'Lunch', count:1},
        { name: 'IceCream', count:1},
      ]
  }

  getAll():Foods[]{
    return [
      {
        id:1,
        name:'BreakFast',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
        star: 4.5,
        imageUrl:'/assets/breakfast.jpg',
        tags:['EastFood','Pizza','Lunch']
      },
      {
        id:2,
        name:'Lunch',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
        star: 4.5,
        imageUrl:'/assets/lunch.jpg',
        tags:['EastFood','Pizza','Lunch']
      },
      {
        id:3,
        name:'Dinner',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
        star: 4.5,
        imageUrl:'/assets/dinner.jpg',
        tags:['EastFood','Pizza','Lunch']
      },
      {
        id:4,
        name:'IceCream',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
        star: 4.5,
        imageUrl:'/assets/icecream.jpg',
        tags:['EastFood','Pizza','Lunch']
      }

    ]
  }
}
