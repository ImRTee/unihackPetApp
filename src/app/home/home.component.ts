import { Component, OnInit } from '@angular/core';
import {PetService} from './pet.service';
import {Pet} from "./shared/pet.module";
import {Food} from "./shared/food.module";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [PetService]
})
export class HomeComponent implements OnInit {

  constructor(private petService: PetService) { }

  ngOnInit() {
  }

}
