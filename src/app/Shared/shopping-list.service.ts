import { Ingredient } from './ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
    private ingredients: Ingredient[] = [];
    ingredientsUpdated = new EventEmitter<Ingredient[]>();

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsUpdated.emit(this.ingredients.slice());
    }
}
