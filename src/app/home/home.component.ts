import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Foods } from 'src/app/shared/models/food';
// import { StarRatingComponent } from 'ng-starrating';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  foods: Foods[] = []
  constructor(private fs: FoodService, private route: ActivatedRoute) { }

  ngOnInit(): void {


    this.route.params.subscribe(params => {
      // if (params['searchItem']){
      //   this.foods = this.fs.getAll().filter(food => food.name.toLowerCase().includes(params['searchItem'].toLowerCase))
      // }
      // else 


      console.log(params);
      if(Object.keys(params).length == 0){
        this.foods = this.fs.getAll()
        console.log(this.foods);
      }
      
      let array = ['All','Dinner','Lunch','IceCream'] 
      if (array.includes(params['tag'])) {
        if(params['tag'] )
        this.foods = this.fs.getAllFoodByTag(params['tag'])
        console.log(this.foods,params['tag']);
      }
      else if(Object.keys(params).length != 0){
        this.foods = this.fs.getAllFoodByName(params['tag'])
        console.log(this.foods,params['tag']);
      }

        // this.foods = this.fs.getAll();
    })
  }
}

