import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { QuizzComponent } from './quizz/quizz.component';
import { AdoptingPhaseComponent } from './adopting-phase/adopting-phase.component';
import { HomeComponent } from './home/home.component';
import { FeedComponent } from './home/main/feed/feed.component';
import { AdventureComponent } from './home/main/adventure/adventure.component';
import { PetComponent } from './home/main/pet/pet.component';
import { StatusComponent } from './home/status/status.component';
import {MainComponent} from './home/main/main.component';
import { StomachComponent } from './home/main/stomach/stomach.component';
import { FoodListComponent } from './home/main/stomach/food-list/food-list.component';
import {FoodDesComponent} from './home/main/stomach/food-des/food-des.component';
import { FoodItemComponent } from './home/main/stomach/food-list/food-item/food-item.component';
import {PetService} from './pet.service';
import { LoginComponent } from './authentication/login/login.component';
import { SignupComponent } from './authentication/signup/signup.component';
import {AppRoutesModule} from "./app-routing.module";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {AngularFireModule} from "angularfire2";
import {AngularFireAuthModule} from "angularfire2/auth";
import {AngularFireDatabaseModule} from "angularfire2/database";
import { NavBarComponent } from './home/nav-bar/nav-bar.component';

export const firebaseConfig = {
  apiKey: "AIzaSyB2igeX7J0wK0-b2l8P-7p7xgGxY6jvJG0",
  authDomain: "virtual-pet-2017.firebaseapp.com",
  databaseURL: "https://virtual-pet-2017.firebaseio.com",
  projectId: "virtual-pet-2017",
  storageBucket: "virtual-pet-2017.appspot.com",
  messagingSenderId: "201181105565"
};


@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    QuizzComponent,
    AdoptingPhaseComponent,
    HomeComponent,
    FeedComponent,
    AdventureComponent,
    PetComponent,
    StatusComponent,
    MainComponent,
    StomachComponent,
    FoodListComponent,
    FoodDesComponent,
    FoodItemComponent,
    LoginComponent,
    SignupComponent,
    PageNotFoundComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutesModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [PetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
