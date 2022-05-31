
import {AngularFireDatabase } from '@angular/fire/compat/database';
import { Injectable, OnInit } from "@angular/core";
import { UserModel } from './user-model';

@Injectable({
    providedIn:'root'
})
export class UserService implements OnInit{
   
    constructor(private db:AngularFireDatabase){

    }
ngOnInit(): void {
    
}
    public getUser(username:string) {
        return this.db.list<UserModel>(username).valueChanges();
    }
   
}