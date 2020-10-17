import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { ProfileComponent } from './user/profile/profile.component';
import { AuthGuard } from './user/auth.guard';
import { MainPageComponent } from './main-page/main-page.component';
import { FooddeliveryComponent } from './fooddelivery/fooddelivery.component';
import { StoreComponent } from './fooddelivery/store/store.component';


const routes: Routes = [

  { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'home', component: MainPageComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'food-delivery', component: FooddeliveryComponent },
  { path: 'food-store', component: StoreComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
