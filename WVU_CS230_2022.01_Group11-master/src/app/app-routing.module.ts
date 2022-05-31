import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { single } from 'rxjs';
import { AdminComponent } from './admin/admin.component';
import { HomeLayoutComponent } from './routingcomponents/home-layout.component';
import { ProfileLayoutComponent } from './routingcomponents/profile-layout/profile-layout.component';
import { ResultsLayoutComponent } from './routingcomponents/results-layout.component';
import { SearchLayoutComponent } from './routingcomponents/search-layout.component';
import { SignInLayoutComponent } from './routingcomponents/sign-in-layout.component';
import { SignUpLayoutComponent } from './routingcomponents/sign-up-layout/sign-up-layout.component';
import { AngularFireAuthGuard, hasCustomClaim, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/compat/auth-guard';
const adminOnly = () => hasCustomClaim('admin');
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['home']);
const redirectLoggedInToProfile = () => redirectLoggedInTo(['profile']);
const belongsToAccount = (next: { params: { id: any; }; }) => hasCustomClaim(`account-${next.params.id}`);
import { topRecipesComponent } from './routingcomponents/top-recipes/top-recipes.component';

const routes:Routes = [
  {path: '', redirectTo: '/home',pathMatch:'full'},
  {path: 'home', component: HomeLayoutComponent },
  {path: 'search', component: SearchLayoutComponent},
  {path: 'results', component: ResultsLayoutComponent},
  {path: 'sign-in', component: SignInLayoutComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'sign-up', component: SignUpLayoutComponent, },
  {path: 'profile', component: ProfileLayoutComponent},
  {path: 'top-recipes', component: topRecipesComponent},
  {path: 'profile', component: ProfileLayoutComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
