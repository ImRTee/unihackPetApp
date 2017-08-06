import { Component, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from "@angular/router";

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})
export class QuizzComponent {
  @ViewChild('f') signupForm: NgForm;
  constructor( private router: Router){}
  defaultQuestion = 'like';
  defaultQuestion2 = 'going';
  defaultQuestion3 = 'full';
  defaultQuestion4 = 'morning';
  suggestUserName() {
    const suggestedName = 'Superuser';
  }

    onSubmit() {
      this.router.navigate(['/adopting']);
    }
}
