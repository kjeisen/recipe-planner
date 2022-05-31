import { Component, Inject, Injectable, Input, OnInit } from "@angular/core";
import { OnDisconnect } from "firebase/database";
import { Subject, BehaviorSubject } from "rxjs";
import { AuthenicationSerivce } from "../auth/authentication/authentication.service";
import { RecipeModel } from "../backend/recipe-model";
import { SearchService } from "../backend/search.service";
import { ResultsPageService } from "../routingcomponents/results-page.service";

@Component({
    selector: 'resultCard',
    templateUrl: 'result.component.html',
    styleUrls: ['result.component.css']
})
@Injectable({
    providedIn: 'root'
})
export class ResultComponent implements OnInit {
    @Input()
    recipe!: RecipeModel;
    isFavorited$: Subject<any> = new BehaviorSubject<any>({});
    isFavorite: boolean = false;
    constructor(private authService: AuthenicationSerivce, private search: SearchService, private result: ResultsPageService) {
    }
    ngOnInit(): void {
        this.result.recipe.subscribe(value => {
            this.recipe = value.recipe;
            this.ifFavorited(this.recipe);

        })

        this.isFavorited.subscribe(value => {
            console.log(value)
            this.isFavorite = value.value;
        }, e => { console.log(e.message) })


    }
    get isFavorited() {
        return this.isFavorited$ as BehaviorSubject<any>;
    }
    ifFavorited(recipe: any): boolean {
        const user = this.authService.returnUser();
        if (user == null) return false;
        console.log('runninh if fav' + this.recipe)

        this.search.getUserRecipes(user.uid).subscribe(value => {
            console.log(value)
            if (value == null) {
                console.log(value)
                return false;
            }
            for (var recipe of value) {
                console.log(recipe.title)
                console.log(this.recipe.title)
                if (recipe.title.includes(this.recipe.title)) {
                    this.isFavorited$.next({ value: true });
                    return true;
                }
            }
            return false;
        });
        return false;
    }
    addRecipeToFavorites(recipe: any) {
        const user = this.authService.returnUser();
        console.log(user);
        if (user == null) {
            alert('User must be signed in to save recipes');
            return
        }
        this.isFavorited$.next({ value: true });
        console.log('not void')
        console.log(this.isFavorite)
        this.search.addUserRecipe(user.uid, recipe);
    }
    removeRecipeFromFavorites(recipe: any) {
        const user = this.authService.returnUser();
        if (user == null) {
            alert('User must be signed in to save recipes');
            return
        }
        this.isFavorited$.next({ value: false });
        this.search.removeUserRecipe(user.uid, recipe.title)
    }
}