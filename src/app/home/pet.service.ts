import {Food} from "./shared/food.module";
import {Pet} from "./shared/pet.module";

export class PetService{
  private petObj = new Pet(
    'Donny',
    1,
    0,
    'http://cdn.wallpapersafari.com/90/92/bfaDk7.jpg',
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
