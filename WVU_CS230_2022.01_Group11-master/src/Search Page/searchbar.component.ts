import { Component, Input } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Component ({
 selector: 'reciplanner-searchbar',
 templateUrl: 'searchbar.component.html',
 styleUrls: ['searchbar.component.css']
})
export class SearchBarComponent {

    static searchText: any;
    
}