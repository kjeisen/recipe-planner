import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Injectable } from "@angular/core";
import { topRecipesModel } from './top-recipes.model';

//Gives the ability to be injected into the code
@Injectable(
    { providedIn: 'root' }
)

//Contains a method to declare a database instance and return data from the backend
export class topRecipesService {
    //Declares db as an instance of AngularFireDatabase
    constructor(private db:AngularFireDatabase) {
    }

    //Method that takes no params and returns data under the Recipes section in the database
    getProductList() {
        return this.db.list<topRecipesModel>("Recipes/").valueChanges();
    }
    
}