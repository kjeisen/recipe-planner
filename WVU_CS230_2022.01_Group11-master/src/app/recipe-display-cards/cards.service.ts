import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/compat/database";
import { SmallCardModel } from "./recipe-sm.model";

@Injectable(
    {providedIn:'root'}
)

export class CardsService {

    constructor(private db:AngularFireDatabase) {

    }

    public getCards() {
        return this.db.list<SmallCardModel>('Cards').valueChanges();
    }
}