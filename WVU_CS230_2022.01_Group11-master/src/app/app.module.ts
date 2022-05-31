import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavBarComponent } from './navigation/topnavbar.component';
import { HomeLayoutComponent } from './routingcomponents/home-layout.component';
import { SearchLayoutComponent } from './routingcomponents/search-layout.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { SearchBarComponent } from 'src/Search Page/searchbar.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore'
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SearchFilter } from './routingcomponents/search-filter.pipe';
import { HttpClientModule } from '@angular/common/http';
import { SearchCard } from './recipe-display-cards/searchcard.component';
import { AdminComponent } from './admin/admin.component';
import { SignInLayoutComponent } from './routingcomponents/sign-in-layout.component';
import { Caurosel } from './routingcomponents/caurosel.component';
import { AuthenticationComponent } from './auth/authentication/authentication.component';
import { SignUpLayoutComponent } from './routingcomponents/sign-up-layout/sign-up-layout.component';
import { getAuth } from 'firebase/auth';
import { ProfileLayoutComponent } from './routingcomponents/profile-layout/profile-layout.component';
import { DisplayCard } from './recipe-display-cards/homedisplaycard.component';
import { ResultComponent } from './recipe-display-cards/result.component';
import { ResultsLayoutComponent } from './routingcomponents/results-layout.component';

import { topRecipesComponent } from './routingcomponents/top-recipes/top-recipes.component';
import { topRecipeCard } from './routingcomponents/top-recipes/top-recipes-card.component';
import { FooterComponent } from './navigation/footer.component';
import { ResultsPageService } from './routingcomponents/results-page.service';



@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    FooterComponent,
    HomeLayoutComponent,
    SearchLayoutComponent,
    SearchBarComponent,
    SearchFilter,
    SearchCard,
    SignInLayoutComponent,
    Caurosel,
    AdminComponent,
    AuthenticationComponent,
    SignUpLayoutComponent,
    ProfileLayoutComponent,
    DisplayCard,
    ResultComponent,
    ResultsLayoutComponent,
    topRecipesComponent,
    topRecipeCard,
    
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    BrowserModule,
    AppRoutingModule,
    AngularFirestoreModule,
    FormsModule,
    Ng2SearchPipeModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }