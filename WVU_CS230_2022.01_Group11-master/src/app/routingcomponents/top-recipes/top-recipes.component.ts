import { Component, OnInit } from "@angular/core";
import { topRecipesModel } from "./top-recipes.model";
import { topRecipesService } from "./top-recipes.service";

//Declares component and identifiers
@Component({
  selector: 'rp-top',
  templateUrl: 'top-recipes.component.html',
  styleUrls: ['top-recipes.component.css']
})

export class topRecipesComponent implements OnInit {

  //Assigns products variable to model topRecipesModel's inputs
  products: topRecipesModel[] = [];

  //Declares topService as an instance of topRecipesService
  constructor(private topService: topRecipesService) {
  }

  //Subscribes data using topService in the model of topRecipesModel[]
  ngOnInit(): void {
    this.topService.getProductList().subscribe((data: topRecipesModel[]) => {
      console.log("Fetching products");
      //Pushes each instance of product variable
      for (var product of data) {
        this.products.push(product);
      }
    });
  }
}