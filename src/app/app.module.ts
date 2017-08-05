import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AuthenticationComponent } from './src/app/authentication/authentication.component';
import { QuizzComponent } from './src/app/quizz/quizz.component';
import { AdoptingPhaseComponent } from './src/app/quizz/adopting-phase/adopting-phase.component';
import { HomeComponent } from './src/app/home/home.component';
import { FeedComponent } from './src/app/home/feed/feed.component';
import { AdventureComponent } from './src/app/home/adventure/adventure.component';
import { StomachComponent } from './src/app/home/stomach/stomach.component';
import { HelpComponent } from './src/app/home/help/help.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    QuizzComponent,
    AdoptingPhaseComponent,
    HomeComponent,
    FeedComponent,
    AdventureComponent,
    StomachComponent,
    HelpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
