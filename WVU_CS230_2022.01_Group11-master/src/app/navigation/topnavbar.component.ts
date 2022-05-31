import { ChangeDetectorRef, Component, Injectable, Input, NgZone, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { flush } from "@angular/core/testing";
import { provideFirebaseApp } from "@angular/fire/app";
import { AngularFireModule } from "@angular/fire/compat";
import { getAuth } from "firebase/auth";
import { BehaviorSubject, Observable, Subscription, switchMap } from "rxjs";
import { environment } from "src/environments/environment";
import { AuthenicationSerivce } from "../auth/authentication/authentication.service";


@Component({
    selector: 'reciplanner-topnavbar',
    templateUrl: 'topnavbar.component.html',
    styleUrls: ['topnavbar.component.css']
})
@Injectable({
    providedIn: 'root'
})
export class TopNavBarComponent implements OnInit {
    private user: any;

    @Input() public ifLoggedIn: boolean = false;
    public displayName: string = '';

    constructor(private authService: AuthenicationSerivce) { }

    async ngOnInit(): Promise<void> {
        await this.authService.ngOnInit().catch(err => {
            console.log(err)
        }).then(value => {
            console.log(value);
            console.log(getAuth().currentUser)
        })
        this.authService.profile.subscribe(profile => {
            if (profile.user == null) return
            this.user = profile.user;
            this.displayName = this.user.displayName;
            this.ifLoggedIn = true;
            console.log(this.displayName + 'is logged in: ' + this.ifLoggedIn)
        }, err => {
            console.log(err)
        })
    }


    updateUser(): void {
    }
    signOut() {
        this.authService.logOut();
        this.ifLoggedIn = false;
    }
    getIfLoggedIn() {

    }
    setLoggedIn(value: boolean) {
        this.ifLoggedIn = value;
    }
    setDisplayName(value: any) {
        if (value == null) return
        this.displayName = value;
    }








}