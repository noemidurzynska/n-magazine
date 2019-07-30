import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RecipesComponent} from './recipes/recipes.component';
import { TravelComponent} from './travel/travel.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { TablesComponent } from './tables/tables.component';
import { FormsComponent } from './forms/forms.component';
import { PaymentComponent } from './payment/payment.component';
import { TravelMountainComponent } from './travel/travel-mountain/travel-mountain.component';
import { TravelLandscapeComponent } from './travel/travel-landscape/travel-landscape.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'recipes', component: RecipesComponent},
  {path: 'travel', component: TravelComponent},
  {path: 'statistics', component: StatisticsComponent},
  {path: 'tables', component: TablesComponent},
  {path: 'forms', component: FormsComponent},
  {path: 'payment', component: PaymentComponent},
  {path: 'travel-mountain', component: TravelMountainComponent},
  {path: 'travel-landscape', component: TravelLandscapeComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
