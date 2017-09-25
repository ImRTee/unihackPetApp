import { Component, OnInit } from '@angular/core';
import {PetService} from "../../../pet.service";
import {Food} from "../../../shared/food.module";

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Food[];
  constructor(private petServ: PetService) { }

  ngOnInit() {
    this.foods = this.petServ.getPetObj().stomach;
  }

}
