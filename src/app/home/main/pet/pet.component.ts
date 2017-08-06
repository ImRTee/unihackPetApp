import { Component, OnInit } from '@angular/core';
import {PetService} from "../../../pet.service";
import {Pet} from "../../shared/pet.module";

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {
  petObj: Pet;

  constructor(private petService: PetService) { }

  ngOnInit() {
    this.petObj = this.petService.getPetObj();
  }

}
