import { Component, OnInit } from '@angular/core';
import {StomachService} from "./stomach.service";
import {Food} from "../../shared/food.module";

@Component({
  selector: 'app-stomach',
  templateUrl: './stomach.component.html',
  styleUrls: ['./stomach.component.css'],
  providers: [StomachService]
})
export class StomachComponent implements OnInit {

  selectedFood: Food;

  constructor(private stomachServ: StomachService) { }

  ngOnInit() {
    this.stomachServ.foodSelectedEvent.subscribe(
      (food: Food) => {
        this.selectedFood = food
    }
    )
  }

}
