import { Component } from '@angular/core';
import data from '/src/assets/json/data.json';
import {FormControl, FormGroup} from "@angular/forms";



@Component({
  selector: 'questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent {
  quizOptions = new FormGroup({
    Q1: new FormControl(''),
    Q2: new FormControl(''),
  });
  quizData=data;
  quizAnswers:any;
  show=false;
  Q_ans=0;
  onSubmit(){
    this.quizAnswers=this.quizOptions.value;
    this.saveAnswers(this.quizAnswers);
    this.show=true

    if(this.quizAnswers.Q2===" Heisenberg"){
      // console.log(this.quizAnswers.Q2);
      console.log(this.Q_ans);
      this.Q_ans=this.Q_ans+1;
      console.log((this.Q_ans));
    }
    if(this.quizAnswers.Q1===" 6*10^8 m/s"){
      this.Q_ans=this.Q_ans+1;
      console.log((this.Q_ans));
    }
  };
  ngOnInit(){
    this.quizAnswers=this.readAnswers();
    console.log("reading",this.quizAnswers)
  }
  saveAnswers(answers:any){
    localStorage.setItem("answers", JSON.stringify(answers));
  }
  readAnswers(){
    const answers = localStorage.getItem("answers");
    if(answers == null)
      return null;
    return JSON.parse(answers);
  }


}
