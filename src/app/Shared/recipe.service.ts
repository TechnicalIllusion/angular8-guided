import { Recipe } from '../recipes/recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from './ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Injectable()
export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe(
          'Tasty Schnitzel',
          'A super-tasty Schnitzel - just awesome!',
          'https://bit.ly/2O32YDL',
          [
            new Ingredient('meat', 3),
            new Ingredient('French Fries', 20)
          ]
        ),
        new Recipe(
          'Big Fat Burger',
          'What else you need to say?',
          'https://bit.ly/2GoOUQH',
          [
            new Ingredient('Buns', 2),
            new Ingredient('Meat', 2),
            new Ingredient('Lettuce', 1),
            new Ingredient('Tomato', 3),
            new Ingredient('Bacon', 2)
          ]
        )
      ];
      recipeSelected = new EventEmitter<Recipe>();

      constructor(private shoppingListService: ShoppingListService) {}

      getRecipes() {
          return this.recipes.slice();
      }

      getRecipe(id: number): Recipe  {
        return this.recipes[id];
      }

      addIngredientsToShoppingList(ingredientList: Ingredient[]) {
        ingredientList.forEach(ingredient => {
            this.shoppingListService.addIngredient(ingredient);
        });
    }
}
