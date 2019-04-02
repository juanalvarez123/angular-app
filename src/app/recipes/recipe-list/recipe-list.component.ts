import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../../shared/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    {
      name: 'A test recipe',
      description: 'This is simply a test',
      imagePath: 'https://fodmapchallenge.com/wp-content/uploads/2018/01/1-IMG_4227.jpg'
    },
    {
      name: 'Another recipe',
      description: 'Recipe text',
      imagePath: 'https://www.homecuresthatwork.com/wp-content/uploads/2019/' +
        '01/640_bigstock-Healthy-Meal-Prep-Containers-W-247608154-640x383.jpg'
    }
  ];

  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onSelectedRecipe(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }
}
