
import {AngularFireDatabase } from '@angular/fire/compat/database';
import { Injectable } from "@angular/core";
import { RecipeModel } from "../backend/recipe-model";
import { query, ref, set } from 'firebase/database';

@Injectable({
    providedIn:'root'
})
export class SearchService{
   
    constructor(private db:AngularFireDatabase){

    }

    /**
     * Gets Recipes from Backend Firebase
     * @returns The list of Recipes in the database
     */
    public getProducts() {
        return this.db.list<RecipeModel>("Recipes").valueChanges();
    }

    /**
     * Gets User Saved Recipes From firebase
     * @param userId 
     * @returns List of Recipes Saved to User
     */
    public getUserRecipes(userId:string){
        var ref = this.db.list<RecipeModel>('users/'+userId+'SavedRecipes/').query.ref;
        return this.db.list<RecipeModel>('users/'+userId+'/SavedRecipes/').valueChanges()
    }
    /**
     * Adds Recipes to User's Saved Recipes
     * @param userId 
     * @param recipe 
     */
    public addUserRecipe(userId:string, recipe:RecipeModel){
        var Ref = this.db.list('users/'+userId+'/SavedRecipes/').query.ref;
        Ref.child(recipe.title).set(recipe);
    }
    /**
     * Removes recipe from User's Saved Recipes
     * @param userId 
     * @param title 
     * @returns 
     */
    public removeUserRecipe(userId:string, title:string){
        return this.db.list<RecipeModel>('users/'+ userId + "/SavedRecipes/" +title).remove();
    }
    /**
     * Removes User information from Firebase
     * @param userId 
     * @returns 
     */
    public removeUser(userId:string){
        return this.db.list('users/'+userId).remove();
    }
    /**
     * Addes Recipe to Backend (Accessible from Admin page)
     * @param product 
     */
    addProduct(product: RecipeModel){
       var ref=  this.db.list<RecipeModel>("Recipes/").query.ref;
       ref.child(product.title).set(product);
    }
}
