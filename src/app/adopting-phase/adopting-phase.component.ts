import { Component, OnInit } from '@angular/core';
import {Pet} from "../home/shared/pet.module";
import {PetService} from "../pet.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-adopting-phase',
  templateUrl: './adopting-phase.component.html',
  styleUrls: ['./adopting-phase.component.css']
})
export class AdoptingPhaseComponent implements OnInit {
  petObj: Pet;
  petName: string;
  constructor(private petServ: PetService, private router: Router) { }

  ngOnInit() {
    this.petObj = this.petServ.getPetObj();
  }
  submitName(nameSubmitted: string){
    this.petName = nameSubmitted;
    this.petServ.adotingPet(this.petName);
    this.router.navigate(['/home']);
  }


}
