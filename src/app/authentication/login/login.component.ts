import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import {AngularFireAuth} from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name: string;
  user: Observable<firebase.User>;
  items: FirebaseListObservable<any[]>;
  msgVal= '';
  provider:  any;
  error: Error;

  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase, private router: Router) {
    this.items = af.list('/messages', {
      query: {
        limitToLast: 50
      }
    });
    this.user = this.afAuth.authState;
  }
  ngOnInit() {
    this.provider = new firebase.auth.GoogleAuthProvider();
  }

  loginGoogle() {
    this.afAuth.auth.signInWithPopup(this.provider).then(
      (userInfo) => {

        this.router.navigate(['/quizz', userInfo.additionalUserInfo.profile.name]);;
        console.log(userInfo);
      });
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  Send(desc: string) {
    this.items.push({message: desc});
    this.msgVal = '';
  }
  onSubmit(form: NgForm) {
    console.log(form);
  }



}
