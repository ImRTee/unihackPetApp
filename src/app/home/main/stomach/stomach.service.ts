import {EventEmitter} from "@angular/core";
import {Food} from "../../shared/food.module";

export class StomachService {
  foodSelectedEvent = new EventEmitter<Food>()
  constructor() {} ;
}
