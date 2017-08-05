import { Component} from '@angular/core';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent {
  suggestUserName() {
    const suggestedName = 'Superuser';
  }
  onSubmit() {
    console.log('Submit');
  }
}
