import { Recipe } from '../shared/recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    {
      name: 'Hamburguer',
      description: 'This is a recipe for a big hamburguer',
      imagePath: 'https://cdn-image.myrecipes.com/sites/default/files/styles/4_3' +
        '_horizontal_-_900x675/public/classic-burgers-u.jpg?itok=jy7-zE2F',
      ingredients: [{
        name: 'Bread',
        amount: 1
      }, {
        name: 'Tomatoes',
        amount: 3
      }, {
        name: 'Lettuce',
        amount: 2
      }, {
        name: 'Beef',
        amount: 1
      }, {
        name: 'French fries',
        amount: 20
      }]
    },
    {
      name: 'Hot Dog',
      description: 'The best hot dogs ever',
      imagePath: 'https://tmbidigitalassetsazure.blob.core.windows.net/secure/RMS/' +
        'attachments/37/1200x1200/exps165727_SD163617B02_04_4b.jpg',
      ingredients: [{
        name: 'Bread',
        amount: 1
      }, {
        name: 'Sausage',
        amount: 1
      }, {
        name: 'Potatoes',
        amount: 3
      }, {
        name: 'Cheese',
        amount: 2
      }]
    }
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
