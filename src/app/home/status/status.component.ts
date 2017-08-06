import {Component, Input, OnInit} from '@angular/core';
import {Pet} from "../shared/pet.module";

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  @Input() pet: Pet;
  constructor() { }

  ngOnInit() {
  }

}
