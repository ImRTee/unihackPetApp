import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  feature = 'Pet';
  isFeeding = false;
  constructor() { }

  ngOnInit() {
  }

  onNavigate(selectedFeature: string){
    this.feature = selectedFeature;
  }
  onFeeding(){
    this.isFeeding = !this.isFeeding;
  }

}
