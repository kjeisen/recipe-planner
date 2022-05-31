import { Component, Input } from "@angular/core";

//Declares component and identifiers
@Component({
    selector: 'tr-card',
    templateUrl: 'top-recipes-card.component.html',
    styleUrls: ['top-recipes-card.component.css']
})

//Exports the class for the cards used by top-recipes
export class topRecipeCard {

    //Inputs declared
    @Input() img: string;
    @Input() title: string;
    @Input() desc: string;

    //Constructor for inputs, defaulted to ""
    constructor() {
        this.img = "";
        this.title = "";
        this.desc = "";
    }
}