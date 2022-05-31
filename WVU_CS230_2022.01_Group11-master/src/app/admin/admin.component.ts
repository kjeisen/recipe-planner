import { Component, OnInit } from '@angular/core';
import { RecipeModel } from 'src/app/backend/recipe-model';
import { SearchService } from 'src/app/backend/search.service';
import { StringRecipeModel } from './string-only-for-admin-recipe-model';

@Component({
  selector: 'rp-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(public rp: SearchService) { }

  ngOnInit(): void {
  }
  cleanData(recipe: StringRecipeModel){
    var key = recipe.keywords.split("%");
    var dir = recipe.directions.split("%");
    var ingred = recipe.ingredients.split("%");
    var cleanRecipe = new RecipeModel(recipe.img,recipe.title,ingred,dir,key,"description");
    this.addProduct(cleanRecipe);
  }

  addProduct(recipe: RecipeModel){
    console.log("you clicked add recipe");
    console.log(recipe);
    this.rp.addProduct(recipe);
  }

}