import { Component, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})
export class QuizzComponent {
  @ViewChild('f') signupForm: NgForm;
  defaultQuestion = 'like';
  defaultQuestion2 = 'going';
  defaultQuestion3 = 'full';
  defaultQuestion4 = 'morning';
  suggestUserName() {
    const suggestedName = 'Superuser';
  }
    // onSubmit(form: NgForm) {
    // console.log(form);
    // }
    onSubmit() {
      console.log(this.signupForm);
    }
}
