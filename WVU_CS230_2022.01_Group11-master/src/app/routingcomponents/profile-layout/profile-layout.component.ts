
import { Component, Injectable, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
import { AuthenicationSerivce } from 'src/app/auth/authentication/authentication.service'
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { getLocaleDayNames } from "@angular/common";
import { CheckboxControlValueAccessor } from "@angular/forms";
import { RecipeModel } from "../../backend/recipe-model";
import { SearchService } from "../../backend/search.service";
import { ResultsPageService } from "../results-page.service";

@Component({
    selector: 'profile-layout',
    templateUrl: 'profile-layout.component.html',
    styleUrls: ['profile-layout.component.css']
})
@Injectable({
    providedIn: 'root'
})
export class ProfileLayoutComponent implements OnInit {
    private user: any;
    recipes: RecipeModel[] = [];
    items: string[] = []
    

    constructor(private authService: AuthenicationSerivce, private searchService: SearchService, private resultsService:ResultsPageService, private router:Router) {
    }

    @Input() public ifLoggedIn: boolean = false;
    public displayName: string = '...';
    public userID: string = "000"
    public photoUrl: string = 'n/a'


    async ngOnInit(): Promise<void> {
        await this.authService.ngOnInit().catch(err => {
        })
        this.authService.profile.subscribe(profile => {
            if (profile.user == null) return
            this.user = profile.user;
            this.displayName = this.user.displayName;
            this.photoUrl = this.user.photoUrl;
            this.ifLoggedIn = true;
            console.log(this.displayName + ' is logged in: ' + this.ifLoggedIn)
        }, err => {
            console.log(err)
        })
        this.searchService.getUserRecipes(this.user.uid).subscribe(data => {
            console.log("fetching recipe data...")
            for (var recipe of data) {
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
    updateUser(): void {
    }
    signOut() {
        this.authService.logOut();
        this.ifLoggedIn = false;
    }
    getIfLoggedIn() {

    }
    setLoggedIn(value: boolean) {
        this.ifLoggedIn = value;
    }
    setDisplayName(value: any) {
        if (value == null) return
        this.displayName = value;
    }
    getShopList() {
        return this.user.items
    }


}
