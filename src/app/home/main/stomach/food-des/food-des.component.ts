import {Component, Input, OnInit} from '@angular/core';
import {Food} from "../../../shared/food.module";

@Component ({
  selector: 'app-food-des',
  templateUrl: './food-des.component.html',
  styleUrls: ['./food-des.component.css']
})
export class FoodDesComponent implements OnInit {
  @Input() food: Food;
  constructor() { }

  ngOnInit() {
  }

}
