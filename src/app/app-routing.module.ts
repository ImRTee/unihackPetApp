import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {LoginComponent} from "./authentication/login/login.component";
import {SignupComponent} from "./authentication/signup/signup.component";
import {QuizzComponent} from "./quizz/quizz.component";
import {AdoptingPhaseComponent} from "./adopting-phase/adopting-phase.component";
import {HomeComponent} from "./home/home.component";
import {AdventureComponent} from "./home/main/adventure/adventure.component";
import {PetComponent} from "./home/main/pet/pet.component";
import {StomachComponent} from "./home/main/stomach/stomach.component";



const appRoutes: Routes = [
  {path: '' , redirectTo: '/login', pathMatch: 'full' },
  {path: 'login' , component: LoginComponent },
  {path: 'signup' , component: SignupComponent },
  {path: 'quizz' , component: QuizzComponent },
  {path: 'adopting' , component: AdoptingPhaseComponent },
  {path: 'home', component: HomeComponent , children: [
    {path: 'adventure', component: AdventureComponent},
    {path: 'pet', component: PetComponent},
    {path: 'stomach', component: StomachComponent}
  ]}
  {path: 'not-found', component: PageNotFoundComponent, pathMatch:'full'},
  {path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})

export class AppRoutesModule {}
