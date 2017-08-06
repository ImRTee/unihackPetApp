import {Component, Input, OnInit} from '@angular/core';
import {StomachService} from "../../stomach.service";

@Component({
  selector: 'app-food-item',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.css']
})
export class FoodItemComponent implements OnInit {
  @Input() food;
  constructor(private stomachServ: StomachService) { }

  ngOnInit() {
  }
  onSelect(){
    this.stomachServ.foodSelectedEvent.emit(this.food);
  }
}
