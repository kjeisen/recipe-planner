import { Component, Input } from "@angular/core";

@Component({
    selector: 'rp-searchCard',
    templateUrl: 'searchcard.component.html',
    styleUrls: ['searchcard.component.css']
})

export class SearchCard{
    @Input() img: string;
    @Input() title: string;

    constructor(){
        this.img = "";
        this.title = "";
    }
}