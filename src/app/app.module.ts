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
import { AngularFireModule } from 'angularfire2';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';
import { AuthGuard } from './auth.service';
import { routes } from './app.routes';

export const firebaseConfig = {
  apiKey: 'AIzaSyDhF9G9rFJ7inda2Y-PpQmVMesEHj86K_0',
  authDomain: 'unihack-1d5fb.firebaseapp.com',
  databaseURL: 'https://unihack-1d5fb.firebaseio.com',
  projectId: 'unihack-1d5fb',
  storageBucket: 'unihack-1d5fb.appspot.com',
  messagingSenderId: '588754196946'
};

const appRoutes: Routes = [
  {path: '' , component: AuthenticationComponent },
  {path: 'quizz' , component: QuizzComponent },
  {path: 'home' , component: HomeComponent },
  {path: 'home/pet/stomach' , component: StomachComponent },
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
    ToolsComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    MembersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
