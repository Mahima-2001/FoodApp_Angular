import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { Foods } from '../shared/models/food';
import { FoodService } from '../services/food/food.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  foods:Foods[]=[]
  searchItem:string = '';

  constructor(private route:ActivatedRoute, private router:Router, private fs:FoodService){}

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      if(params['searchItem'])
      this.searchItem = params['searchItem'];
    })
  }

  search(): void
  {
    // alert(this.searchItem)
    if(this.searchItem)
    this.router.navigateByUrl('/tag/'+this.searchItem)
  }

}
