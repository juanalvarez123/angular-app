import { Component, OnInit } from '@angular/core';

import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is simply a test', 'https://fodmapchallenge.com/wp-content/uploads/2018/01/1-IMG_4227.jpg'),
    new Recipe('Another recipe', 'Recipe text', 'https://www.homecuresthatwork.com/wp-content/uploads/2019/01/640_bigstock-Healthy-Meal-Prep-Containers-W-247608154-640x383.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
