import { Component, Input } from "@angular/core";
import { CardsService } from "./cards.service";
import { RecipeModel } from "../backend/recipe-model";

@Component({
    selector: 'rp-homedisplaycard',
    templateUrl: 'homedisplaycard.component.html',
    styleUrls: ['homedisplaycard.component.css']
})

export class DisplayCard{
    @Input() img: string;
    @Input() title: string;

    constructor(private cardService: CardsService){
        this.img = "";
        this.title = "";
    }
}