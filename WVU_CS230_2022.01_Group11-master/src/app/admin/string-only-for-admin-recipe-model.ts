import { isNgTemplate } from "@angular/compiler";

//serves as the model for the search page's
export class StringRecipeModel {
    img: string;
    title: string
    ingredients: string;
    directions: string;
    keywords: string;

    constructor(img: string, title: string, ingredients: string, directions: string,keywords:string) {
        this.img = img;
        this.title = title;
        this.ingredients = ingredients;
        this.directions = directions;
        this.keywords = keywords;
    }

} 