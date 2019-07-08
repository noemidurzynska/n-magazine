import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RecipesComponent } from './recipes/recipes.component';
import { TravelComponent } from './travel/travel.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { TablesComponent } from './tables/tables.component';
import { FormsComponent } from './forms/forms.component';
import { PaymentComponent } from './payment/payment.component';
import { TravelMountainComponent } from './travel/travel-mountain/travel-mountain.component';
import { TravelLandscapeComponent } from './travel/travel-landscape/travel-landscape.component';
import { AboutComponent } from './about/about.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RecipesComponent,
    TravelComponent,
    StatisticsComponent,
    TablesComponent,
    FormsComponent,
    PaymentComponent,
    TravelMountainComponent,
    TravelLandscapeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
