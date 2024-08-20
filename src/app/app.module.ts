import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateQuizQuestionsComponent } from './create-quiz-questions/create-quiz-questions.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { ShowQuizQuestionsComponent } from './show-quiz-questions/show-quiz-questions.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { StartQuizComponent } from './start-quiz/start-quiz.component';
import { MatButtonModule } from '@angular/material/button';
import { QuizComponent } from './quiz/quiz.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { QuizResultComponent } from './quiz-result/quiz-result.component';
import { ResultComponent } from './result/result.component';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [
    AppComponent,
    CreateQuizQuestionsComponent,
    NavbarComponent,
    ShowQuizQuestionsComponent,
    StartQuizComponent,
    StartQuizComponent,
    QuizComponent,
    QuizResultComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
