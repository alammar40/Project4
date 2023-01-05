import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent {
quizResults:number;
  constructor(private router:Router) {
  this.quizResults = this.router.getCurrentNavigation()?.extras?.state!['quizResults'];
  }
}
