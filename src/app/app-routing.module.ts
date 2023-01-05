import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {first} from "rxjs";
import {QuestionsComponent} from "./questions/questions.component";
import {WelcomePageComponent} from "./welcome-page/welcome-page.component";
import {ResultsComponent} from "./results/results.component";

const routes: Routes = [
  {path: 'results',component: ResultsComponent},
  {path: 'question-component', component: QuestionsComponent},
  {path: 'welcome-component', component: WelcomePageComponent},
  {path: '', redirectTo: '/welcome-component', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
