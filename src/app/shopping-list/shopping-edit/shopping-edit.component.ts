import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from '../../services/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddIngredient(name: HTMLInputElement, amount: HTMLInputElement) {
    const ingredient = {
      name: name.value,
      amount: Number(amount.value)
    };
    this.shoppingListService.ingredientCreated.emit(ingredient);
  }
}
