import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { ProfileComponent } from './user/profile/profile.component';
import { AuthGuard } from './user/auth.guard';
import { MainPageComponent } from './main-page/main-page.component';
import { FooddeliveryComponent } from './fooddelivery/fooddelivery.component';
import { StoreComponent } from './fooddelivery/store/store.component';
import { RestaurantsNearMeComponent } from './fooddelivery/restaurants-near-me/restaurants-near-me.component';
import { FooddeliveryListComponent } from './fooddelivery/fooddelivery-list/fooddelivery-list.component';
import { FoodCategoriesComponent } from './fooddelivery/fooddelivery-list/food-categories/food-categories.component';
import { FoodFiltersComponent } from './fooddelivery/fooddelivery-list/food-filters/food-filters.component';
import { PickupListComponent } from './pickup/pickup-list/pickup-list.component';


const routes: Routes = [

  { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'home', component: MainPageComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'food-delivery-list', component: FooddeliveryListComponent },
  { path: 'food-store', component: StoreComponent },
  { path: 'restaurants-near-me', component: RestaurantsNearMeComponent },
  { path: 'food-categories', component: FoodCategoriesComponent },
  { path: 'food-filters', component: FoodFiltersComponent },
  { path: 'pickup-list', component: PickupListComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
