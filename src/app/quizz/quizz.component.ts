import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})
export class QuizzComponent implements OnInit {
  @ViewChild('f') signupForm: NgForm;
  userName: string;
  defaultQuestion = 'like';
  defaultQuestion2 = 'going';
  defaultQuestion3 = 'full';
  defaultQuestion4 = 'morning';
  constructor( private router: Router,
               private route: ActivatedRoute
               ) {}
  ngOnInit() {
    this.userName = this.route.snapshot.params['username'];
  }



    onSubmit() {
      this.router.navigate(['/adopting']);
    }
}
