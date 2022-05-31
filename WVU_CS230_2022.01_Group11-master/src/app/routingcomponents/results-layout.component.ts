import { Component, OnInit } from "@angular/core";
import { take } from "rxjs/internal/operators/take";
import { RecipeModel } from "../backend/recipe-model";
import { SearchLayoutComponent } from "./search-layout.component";
import { ResultsPageService } from "./results-page.service";

@Component ({
 selector: 'results-layout',
 templateUrl: 'results-layout.component.html',
 styleUrls: ['results-layout.component.css']
})

export class ResultsLayoutComponent {
    public recipe! : any;
    constructor(private result:ResultsPageService){

    }
    async ngOnInit(): Promise<void> {
        await this.result.ngOnInit();
        this.result.recipe.subscribe(value => {
            console.log(value)
            this.recipe = value.recipe;
        }, err => {
            console.log(err)
        })
    }
}