import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService{

  recipeSelected = new EventEmitter<Recipe>();

  private recipes:Recipe[]=[
    new Recipe("A Test Recipe","This is a Recipe","https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg",[
      new Ingredient('Meat',1),
      new Ingredient('French Fies',20)
    ]),
    new Recipe("Another Test Recipe","This is another Recipe","https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg",[
      new Ingredient('buns',2),
      new Ingredient('Meat',2)
    ])
  ];

  constructor(private slService:ShoppingListService){}

  getRecipe(){
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients:Ingredient[]){
    this.slService.addIngredients(ingredients);
  }

}
