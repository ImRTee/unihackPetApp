import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { QuizzComponent } from './quizz/quizz.component';
import { AdoptingPhaseComponent } from './quizz/adopting-phase/adopting-phase.component';
import { HomeComponent } from './home/home.component';
import { FeedComponent } from './home/tools/feed/feed.component';
import { AdventureComponent } from './home/tools/adventure/adventure.component';
import { StomachComponent } from './home/pet/stomach/stomach.component';
import { HelpComponent } from './home/tools/help/help.component';
import {RouterModule, Routes} from '@angular/router';
import { PetComponent } from './home/pet/pet.component';
import { StatusComponent } from './home/pet/status/status.component';
import { ToolsComponent } from './home/tools/tools.component';

const appRoutes: Routes = [
  {path: '' , component: AuthenticationComponent },
  {path: 'quizz' , component: QuizzComponent },
  {path: 'home' , component: HomeComponent }
];

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
    HelpComponent,
    PetComponent,
    StatusComponent,
    ToolsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
