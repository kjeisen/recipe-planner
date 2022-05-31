import { Injectable, OnInit } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Router } from "@angular/router";
import * as firebase from "firebase/compat";
import { getAuth, signOut } from "firebase/auth";
import { BehaviorSubject, Observable, of, Subject } from "rxjs";
import { AngularFireDatabase } from "@angular/fire/compat/database";
import { FirebaseApp, FirebaseAppModule } from "@angular/fire/app";
import { AngularFireModule } from "@angular/fire/compat";
import { environment } from "src/environments/environment";
import { initializeApp } from "firebase/app";




@Injectable({
    providedIn: 'root'
})
export class AuthenicationSerivce implements OnInit {
    loggedIn: boolean = false;
    profile$: Subject<any> = new BehaviorSubject<any>({});

    constructor(private auth: AngularFireAuth, private router: Router,) { }

    // Initalizes the App 
    async IntitalizeApp(): Promise<void> {
        AngularFireModule.initializeApp(environment.firebase);

    }

    // Calls to initalize the firebase app then will provide the current user
    async ngOnInit(): Promise<boolean> {
        await this.IntitalizeApp().then(value => {
            setTimeout(() => { this.emit({ user: getAuth().currentUser }); }, 1000)
        }).catch(e => {
            console.log(e)
        })
        return true;
    }

    emit(value: any) {
        this.profile$.next(value);
    }

    get profile(): BehaviorSubject<any> {
        return this.profile$ as BehaviorSubject<any>;
    }

    /**
     * Logins with Firebase using email and password
     * Redirects user to profile page and updates nav bar to display the user
     * @param email 
     * @param password 
     * @returns 
     */
    async loginWithEmail(email: string, password: string): Promise<boolean> {
        await this.auth.signInWithEmailAndPassword(email, password)
            .then(value => {
                this.loggedIn = true;
                this.emit({ user: value.user })
                this.router.navigateByUrl('profile')
            })
            .catch(error => {
                alert(error.message)
                return false;
            })
        if (this.loggedIn) {
            return true;
        }
        return false;
    }

    /**
     * Signs up user with email password and display name
     * @param email 
     * @param password 
     * @param name 
     */
    async signUpWithEmail(email: string, password: string, name: string) {
        this.auth.createUserWithEmailAndPassword(email, password)
            .then(async value => {
                console.log(value)

                await value.user
                    ?.updateProfile({
                        displayName: name
                    })
                this.emit({ user: value.user })
                this.router.navigateByUrl('profile')

            })
            .catch(error => {
                alert(error.message)

            })
    }
    // Logout the current User
    logOut() {
        const auth = getAuth()
        signOut(auth)
            .then(() => {
                console.log("signed-out")
            })
            .catch(error => {
                console.log(error)
            })

    }
    // Returns the current User
    returnUser() {
        return getAuth().currentUser;
    }
    // Returns if User is Logged In
    isLoggedIn(): boolean {
        const auth = getAuth()
        if (auth.currentUser) return true;
        return false;
    }


}