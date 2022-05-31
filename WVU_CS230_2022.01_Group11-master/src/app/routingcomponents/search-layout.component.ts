import { Component, Injectable, OnInit } from "@angular/core";
import { RecipeModel } from "../backend/recipe-model";
import { SearchService } from "../backend/search.service";
import { SearchBarComponent } from "src/Search Page/searchbar.component";
import { SearchCard } from "../recipe-display-cards/searchcard.component";
import { BehaviorSubject, Subject } from "rxjs";
import { Router } from "@angular/router";
import { ResultsPageService } from "./results-page.service";
@Component({
    selector: 'search-layout',
    templateUrl: 'search-layout.component.html',
    styleUrls: ['search-layout.component.css']
})
@Injectable({
    providedIn:'root'
})
export class SearchLayoutComponent implements OnInit{
    recipes: RecipeModel[] = [];
    search="";;
    clickedRecipe$: Subject<any> = new BehaviorSubject<any>({});

    constructor(private searchService: SearchService, private router: Router, private resultsService: ResultsPageService) {
 
    }

    async ngOnInit(): Promise<void> {
        this.searchService.getProducts().subscribe(data => {
            console.log("fetching recipe data...")
            for(var recipe of data){
                this.recipes.push(recipe);
            }
        })
    }
   
  


    


    async goToResults(recipe:any){
        this.resultsService.recipes = recipe;
        await this.resultsService.ngOnInit();
        this.router.navigateByUrl('results');
        console.log('nav to results')
    }
}


