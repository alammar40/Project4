import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionsComponent } from './questions/questions.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ResultsComponent } from './results/results.component';


@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    WelcomePageComponent,
    ResultsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
