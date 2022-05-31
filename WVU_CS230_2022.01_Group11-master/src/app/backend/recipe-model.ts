import { isNgTemplate } from "@angular/compiler";
import { Inject, Injectable } from "@angular/core";

//serves as the model for the search page's
export class RecipeModel {
    img: string;
    title: string;
    ingredients: string[];
    directions: string[];
    keywords: string[];
    desc:string;

    constructor(img: string, title: string, ingredients: string[], directions: string[],keywords:string[], desc:string) {
        this.img = img;
        this.title = title;
        this.ingredients = ingredients;
        this.directions = directions;
        this.keywords = keywords;
        this.desc = desc;
    }

} 
