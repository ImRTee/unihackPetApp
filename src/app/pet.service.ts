import {Food} from "./home/shared/food.module";
import {Pet} from "./home/shared/pet.module";
import {Subject} from "rxjs/Subject";

export class PetService {
  petNamed = new Subject();
  private petObj = new Pet(
    'DoDo',
    1,
    0,
    'https://s-media-cache-ak0.pinimg.com/736x/cb/eb/46/cbeb46a7bcde12bea4ff0e7f06b70a03--cartoon-foxes-cartoon-fox-drawing.jpg',
    [
      new Food('Donut', 'Ring look-like bread'),
      new Food('Banana', 'Fruit that monkeys eat')
    ],
    100,
    0
  );


  getPetObj() {
    return this.petObj;
  }



}
