import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { QuizzComponent } from './quizz/quizz.component';
import { AdoptingPhaseComponent } from './quizz/adopting-phase/adopting-phase.component';
import { HomeComponent } from './home/home.component';
import { FeedComponent } from './home/feed/feed.component';
import { AdventureComponent } from './home/adventure/adventure.component';
import { StomachComponent } from './home/stomach/stomach.component';
import { HelpComponent } from './home/help/help.component';

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
