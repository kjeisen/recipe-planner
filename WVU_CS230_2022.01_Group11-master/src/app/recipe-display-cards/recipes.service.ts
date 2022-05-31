import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { SmallCardModel } from "./recipe-sm.model";

@Injectable(
    { providedIn: 'root' }
)
export class ProductService {
    private baseUrl: string = "https://reciplanner-394bb-default-rtdb.firebaseio.com/";
    private productsEndPoint: string = "recipes/"

    constructor(private http: HttpClient) {
    }

    getProductList(component: string) {
        return this.http.get<SmallCardModel []>(this.baseUrl + this.productsEndPoint + component + '.json');
    }
}