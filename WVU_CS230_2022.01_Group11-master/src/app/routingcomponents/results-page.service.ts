import { Injectable, Input, OnInit } from "@angular/core";
import { Subject, BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ResultsPageService implements OnInit {
    loggedIn: boolean = false;
    recipe$: Subject<any> = new BehaviorSubject<any>({});
    recipes:any;

    constructor() {


    }
    async ngOnInit(): Promise<boolean> {
        this.emit({recipe: this.recipes });
        return true;
    }
    setRecipes(recipe:any){
        this.recipes = recipe;
    }
    get recipe():BehaviorSubject<any>{
        return this.recipe$ as BehaviorSubject<any>;
    }

    emit(value: any) {
        this.recipe$.next(value);
    }
}