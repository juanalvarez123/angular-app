import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @Output() ingredientCreated = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  onAddIngredient(name: HTMLInputElement, amount: HTMLInputElement) {
    const ingredient = {
      name: name.value,
      amount: Number(amount.value)
    };
    this.ingredientCreated.emit(ingredient);
  }
}
