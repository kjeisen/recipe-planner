import { Component, OnInit } from "@angular/core";
import { SmallCardModel } from "src/app/recipe-display-cards/recipe-sm.model";
import { CardsService } from "../recipe-display-cards/cards.service";

@Component ({
 selector: 'home-layout',
 templateUrl: 'home-layout.component.html',
 styleUrls: ['home-layout.component.css']
})

export class HomeLayoutComponent implements OnInit{
    cards: SmallCardModel[] = [];

    constructor(private cardsService:CardsService) {
        
      }

      ngOnInit(): void {
        this.cardsService.getCards().subscribe((data: SmallCardModel []) => {
          for (var card of data) {
            this.cards.push(card);
          }
        });
      }
}

