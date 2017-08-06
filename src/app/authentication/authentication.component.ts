import { Component} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from "@angular/router";
@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent {

  constructor(private router: Router){}
  suggestUserName() {
    const suggestedName = 'Superuser';
  }
  onSubmit() {
    this.router.navigate(['/quizz']);
  }
}
