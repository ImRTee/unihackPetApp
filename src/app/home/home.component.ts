import { Component, OnInit } from '@angular/core';
import {PetService} from '../pet.service';
import {Pet} from "./shared/pet.module";
import {Food} from "./shared/food.module";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: []
})
export class HomeComponent implements OnInit {
  petObj: Pet;
  constructor(private petService: PetService) { }

  ngOnInit() {
    this.petObj = this.petService.getPetObj();
  }

}
